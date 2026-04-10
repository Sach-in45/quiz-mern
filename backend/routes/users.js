const express = require('express');
const router = express.Router();
const User = require('../models/User');
const QuizResult = require('../models/QuizResult');
const { protect } = require('../middleware/auth');

// @route   GET /api/users/profile
// @desc    Get user profile with stats
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const recentResults = await QuizResult.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('topic difficulty percentage createdAt');

    const topicStats = await QuizResult.aggregate([
      { $match: { user: req.user._id } },
      { $group: { _id: '$topic', avgScore: { $avg: '$percentage' }, count: { $sum: 1 } } }
    ]);

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        totalQuizzes: user.totalQuizzes,
        bestScore: user.bestScore,
        averageScore: user.totalQuizzes > 0 ? Math.round(user.totalScore / user.totalQuizzes) : 0,
        createdAt: user.createdAt
      },
      recentResults,
      topicStats
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user name/password
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findById(req.user._id).select('+password');

    if (name) user.name = name;
    if (password) {
      if (password.length < 6) {
        return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
      }
      user.password = password;
    }

    await user.save();
    res.json({ success: true, message: 'Profile updated', user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
