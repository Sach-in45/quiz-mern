const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  selectedOption: { type: Number, default: -1 },
  isCorrect: { type: Boolean, default: false },
  timeTaken: { type: Number, default: 0 }
});

const quizResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    topic: {
      type: String,
      required: true,
      enum: ['mongodb', 'express', 'react', 'node']
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['easy', 'medium', 'hard']
    },
    totalQuestions: {
      type: Number,
      required: true
    },
    correctAnswers: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    },
    timeTaken: {
      type: Number,
      required: true
    },
    answers: [answerSchema],
    passed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

// Auto-set passed field
quizResultSchema.pre('save', function (next) {
  this.passed = this.percentage >= 60;
  next();
});

module.exports = mongoose.model('QuizResult', quizResultSchema);
