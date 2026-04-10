import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import styles from './Quiz.module.css';

const OPTION_KEYS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const topic = searchParams.get('topic') || 'mongodb';
  const difficulty = searchParams.get('difficulty') || 'easy';

  const {
    questions, currentIndex, currentQuestion,
    answers, timeLeft, status, result, error,
    source, locked, startQuiz, selectAnswer,
    nextQuestion, reset, progress, selectedAnswer
  } = useQuiz();

  useEffect(() => {
    startQuiz(topic, difficulty);
    return () => reset();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (status === 'done' && result) {
      navigate('/results', { state: { result, topic, difficulty } });
    }
  }, [status, result, navigate, topic, difficulty]);

  if (status === 'loading') {
    return (
      <div className={styles.centered}>
        <div className="spinner" />
        <p style={{ marginTop: 16, fontSize: 15, color: 'var(--text)', fontWeight: 600 }}>
          🤖 Generating fresh AI questions...
        </p>
        <p style={{ fontSize: 13, marginTop: 6, color: 'var(--muted)' }}>
          Powered by Gemini AI — unique questions every time!
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.centered}>
        <div className="error-msg" style={{ maxWidth: 400 }}>{error}</div>
        <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => navigate('/')}>← Back Home</button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const isLast = currentIndex === questions.length - 1;

  const getOptClass = (i) => {
    if (!locked) return styles.opt;
    const correct = currentQuestion.correctAnswer;
    const selected = selectedAnswer?.selectedOption;
    if (i === correct) return `${styles.opt} ${styles.correct}`;
    if (i === selected && i !== correct) return `${styles.opt} ${styles.wrong}`;
    return `${styles.opt} ${styles.dimmed}`;
  };

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className="badge badge-accent">{topic.toUpperCase()}</span>
          <span className="badge badge-warn" style={{ marginLeft: 6 }}>{difficulty.toUpperCase()}</span>
          {source === 'gemini-ai' && (
            <span className="badge" style={{ marginLeft: 6, background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}>
              🤖 AI
            </span>
          )}
        </div>
        <div className={`${styles.timer} ${timeLeft <= 10 ? styles.timerDanger : ''}`}>
          <span className={styles.timerVal}>{timeLeft}</span>
          <span className={styles.timerSec}>sec</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className={styles.progressWrap}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <div className={`${styles.questionArea} fade-up`} key={currentIndex}>
        <div className={styles.qMeta}>
          <span className="mono muted">
            Q {String(currentIndex + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
          </span>
        </div>
        <h2 className={styles.qText}>{currentQuestion.question}</h2>

        <div className={styles.options}>
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              className={getOptClass(i)}
              onClick={() => selectAnswer(i)}
              disabled={locked}
            >
              <span className={styles.optKey}>{OPTION_KEYS[i]}</span>
              <span className={styles.optText}>{opt}</span>
            </button>
          ))}
        </div>

        {/* Explanation after answering */}
        {locked && currentQuestion.explanation && (
          <div className={styles.explanation}>
            <span className={styles.explanationIcon}>💡</span>
            <span>{currentQuestion.explanation}</span>
          </div>
        )}

        {/* Time up message */}
        {locked && !selectedAnswer && (
          <div className={styles.timeUp}>⏰ Time's up! The correct answer is highlighted above.</div>
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.dots}>
          {questions.map((_, i) => {
            let cls = styles.dot;
            if (answers[i]) {
              if (i < currentIndex) {
                cls += answers[i].selectedOption === questions[i].correctAnswer
                  ? ` ${styles.dotCorrect}` : ` ${styles.dotWrong}`;
              } else if (i === currentIndex) {
                cls += ` ${styles.dotCurrent}`;
              }
            } else if (i === currentIndex) {
              cls += ` ${styles.dotCurrent}`;
            }
            return <div key={i} className={cls} />;
          })}
        </div>
        <button
          className={`${styles.nextBtn} ${locked ? styles.nextReady : ''}`}
          onClick={nextQuestion}
          disabled={!locked || status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : isLast ? 'Finish ✓' : 'Next →'}
        </button>
      </div>
    </div>
  );
}