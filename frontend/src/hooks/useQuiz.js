import { useState, useEffect, useCallback, useRef } from 'react';
import { getQuestions } from '../utils/questions';
import API from '../utils/api';

export function useQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [locked, setLocked] = useState(false);
  const startTimeRef = useRef(null);
  const questionStartRef = useRef(null);
  const timerRef = useRef(null);

  const clearTimer = () => clearInterval(timerRef.current);

  const startTimer = useCallback(() => {
    clearTimer();
    setTimeLeft(30);
    questionStartRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearTimer(); setLocked(true); return 0; }
        return t - 1;
      });
    }, 1000);
  }, []);

  const startQuiz = (topic, difficulty) => {
    // Get 10 shuffled questions from local bank
    const qs = getQuestions(topic, difficulty, 10);
    if (qs.length === 0) {
      setError('No questions available for this topic and difficulty.');
      return;
    }
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setLocked(false);
    setResult(null);
    setError(null);
    setStatus('active');
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    if (status === 'active' && questions.length > 0) {
      setLocked(false);
      startTimer();
    }
    return clearTimer;
  }, [status, currentIndex, questions.length, startTimer]);

  const selectAnswer = (optionIndex) => {
    if (locked) return;
    const timeTaken = Math.round((Date.now() - questionStartRef.current) / 1000);
    clearTimer();
    setLocked(true);
    setAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        questionId: questions[currentIndex]._id,
        selectedOption: optionIndex,
        timeTaken
      }
    }));
  };

  const nextQuestion = () => {
    if (!locked) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    clearTimer();
    setStatus('submitting');
    const totalTime = Math.round((Date.now() - startTimeRef.current) / 1000);

    const answersArray = questions.map((q, i) => answers[i] || {
      questionId: q._id, selectedOption: -1, timeTaken: 30
    });

    const correctCount = answersArray.filter((a, i) =>
      a.selectedOption === questions[i]?.correctAnswer).length;
    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const score = questions.reduce((sum, q, i) =>
      answersArray[i]?.selectedOption === q.correctAnswer ? sum + (q.points || 10) : sum, 0);

    setResult({
      topic: questions[0]?.topic,
      difficulty: questions[0]?.difficulty,
      totalQuestions,
      correctAnswers: correctCount,
      wrongAnswers: totalQuestions - correctCount,
      score,
      percentage,
      timeTaken: totalTime,
      passed: percentage >= 60,
    });
    setStatus('done');

    // Try saving to DB in background (optional)
    API.post('/quiz/submit', {
      topic: questions[0]?.topic,
      difficulty: questions[0]?.difficulty,
      answers: answersArray,
      timeTaken: totalTime
    }).catch(() => {}); // Silently ignore if fails
  };

  const reset = () => {
    clearTimer();
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setLocked(false);
    setTimeLeft(30);
    setStatus('idle');
    setResult(null);
    setError(null);
  };

  return {
    questions, currentIndex,
    currentQuestion: questions[currentIndex],
    answers, timeLeft, status, result, error, locked,
    startQuiz, selectAnswer, nextQuestion, reset,
    progress: questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0,
    selectedAnswer: answers[currentIndex]
  };
}