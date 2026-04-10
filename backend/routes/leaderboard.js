const express = require('express');
const router = express.Router();
const User = require('../models/User');
const QuizResult = require('../models/QuizResult');
const { protect } = require('../middleware/auth');

// @route   GET /api/leaderboard
// @desc    Get global leaderboard
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { topic, limit = 10 } = req.query;
    const matchStage = topic ? { topic: topic.toLowerCase() } : {};

    const leaderboard = await QuizResult.aggregate([
      { $match: matchStage },
      {
        $group: {
          _id: '$user',
          avgPercentage: { $avg: '$percentage' },
          bestScore: { $max: '$percentage' },
          totalQuizzes: { $sum: 1 },
          totalScore: { $sum: '$score' }
        }
      },
      { $sort: { bestScore: -1, avgPercentage: -1 } },
      { $limit: parseInt(limit) },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'userInfo'
        }
      },
      { $unwind: '$userInfo' },
      {
        $project: {
          name: '$userInfo.name',
          avatar: '$userInfo.avatar',
          bestScore: 1,
          avgPercentage: { $round: ['$avgPercentage', 0] },
          totalQuizzes: 1
        }
      }
    ]);

    res.json({ success: true, leaderboard });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route   GET /api/leaderboard/rank
// @desc    Get the current user's rank
// @access  Private
router.get('/rank', protect, async (req, res) => {
  try {
    const allUsers = await User.find().sort({ bestScore: -1, totalScore: -1 }).select('_id');
    const rank = allUsers.findIndex((u) => u._id.toString() === req.user._id.toString()) + 1;
    res.json({ success: true, rank, total: allUsers.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
