const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const { protect, adminOnly } = require('../middleware/auth');

// @route   GET /api/questions
// @desc    Get questions (filtered by topic + difficulty)
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { topic, difficulty, limit = 10 } = req.query;
    const filter = {};
    if (topic) filter.topic = topic.toLowerCase();
    if (difficulty) filter.difficulty = difficulty.toLowerCase();

    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: parseInt(limit) } },
      { $project: { correctAnswer: 0, explanation: 0 } } // hide answer from client during quiz
    ]);

    res.json({ success: true, count: questions.length, questions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route   GET /api/questions/:id/answer
// @desc    Get correct answer (called after quiz submission only)
// @access  Private
router.get('/:id/answer', protect, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).select('correctAnswer explanation');
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, correctAnswer: question.correctAnswer, explanation: question.explanation });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route   POST /api/questions
// @desc    Create a question (admin only)
// @access  Admin
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json({ success: true, question });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// @route   PUT /api/questions/:id
// @desc    Update a question (admin only)
// @access  Admin
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, question });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// @route   DELETE /api/questions/:id
// @desc    Delete a question (admin only)
// @access  Admin
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
