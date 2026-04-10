const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Question text is required'],
      trim: true
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length === 4,
        message: 'Question must have exactly 4 options'
      }
    },
    correctAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3
    },
    explanation: {
      type: String,
      default: ''
    },
    topic: {
      type: String,
      required: true,
      enum: ['mongodb', 'express', 'react', 'node'],
      lowercase: true
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['easy', 'medium', 'hard'],
      lowercase: true
    },
    points: {
      type: Number,
      default: 10
    },
    timesAnswered: {
      type: Number,
      default: 0
    },
    timesCorrect: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

// Virtual: success rate
questionSchema.virtual('successRate').get(function () {
  if (this.timesAnswered === 0) return 0;
  return Math.round((this.timesCorrect / this.timesAnswered) * 100);
});

module.exports = mongoose.model('Question', questionSchema);
