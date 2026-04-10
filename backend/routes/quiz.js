const express = require('express');
const router = express.Router();
const QuizResult = require('../models/QuizResult');
const Question = require('../models/Question');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// @route   POST /api/quiz/submit
// @desc    Submit quiz answers and get score
// @access  Private
router.post('/submit', protect, async (req, res) => {
  try {
    const { topic, difficulty, answers, timeTaken } = req.body;
    // answers = [{ questionId, selectedOption, timeTaken }]

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ success: false, message: 'Answers are required' });
    }

    // Fetch all questions with correct answers
    const questionIds = answers.map((a) => a.questionId);
    const questions = await Question.find({ _id: { $in: questionIds } });

    const questionMap = {};
    questions.forEach((q) => (questionMap[q._id.toString()] = q));

    let correctAnswers = 0;
    let totalScore = 0;
    const processedAnswers = [];

    for (const answer of answers) {
      const question = questionMap[answer.questionId];
      if (!question) continue;

      const isCorrect = answer.selectedOption === question.correctAnswer;
      if (isCorrect) {
        correctAnswers++;
        totalScore += question.points;
      }

      // Update question stats
      await Question.findByIdAndUpdate(answer.questionId, {
        $inc: {
          timesAnswered: 1,
          timesCorrect: isCorrect ? 1 : 0
        }
      });

      processedAnswers.push({
        question: answer.questionId,
        selectedOption: answer.selectedOption,
        isCorrect,
        timeTaken: answer.timeTaken || 0
      });
    }

    const totalQuestions = answers.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Save quiz result
    const result = await QuizResult.create({
      user: req.user._id,
      topic,
      difficulty,
      totalQuestions,
      correctAnswers,
      score: totalScore,
      percentage,
      timeTaken: timeTaken || 0,
      answers: processedAnswers
    });

    // Update user stats
    const user = await User.findById(req.user._id);
    user.totalQuizzes += 1;
    user.totalScore += percentage;
    if (percentage > user.bestScore) user.bestScore = percentage;
    await user.save();

    // Return results with correct answers for review
    const resultsWithAnswers = answers.map((a) => {
      const q = questionMap[a.questionId];
      return {
        questionId: a.questionId,
        question: q?.question,
        options: q?.options,
        selectedOption: a.selectedOption,
        correctAnswer: q?.correctAnswer,
        explanation: q?.explanation,
        isCorrect: a.selectedOption === q?.correctAnswer
      };
    });

    res.status(201).json({
      success: true,
      result: {
        id: result._id,
        topic,
        difficulty,
        totalQuestions,
        correctAnswers,
        wrongAnswers: totalQuestions - correctAnswers,
        score: totalScore,
        percentage,
        timeTaken,
        passed: result.passed
      },
      reviewAnswers: resultsWithAnswers
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route   GET /api/quiz/history
// @desc    Get user's quiz history
// @access  Private
router.get('/history', protect, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const results = await QuizResult.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-answers');

    const total = await QuizResult.countDocuments({ user: req.user._id });

    res.json({
      success: true,
      results,
      pagination: { page: parseInt(page), limit: parseInt(limit), total, pages: Math.ceil(total / limit) }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route   GET /api/quiz/result/:id
// @desc    Get a specific quiz result with full review
// @access  Private
router.get('/result/:id', protect, async (req, res) => {
  try {
    const result = await QuizResult.findOne({ _id: req.params.id, user: req.user._id })
      .populate('answers.question', 'question options correctAnswer explanation');

    if (!result) return res.status(404).json({ success: false, message: 'Result not found' });
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
