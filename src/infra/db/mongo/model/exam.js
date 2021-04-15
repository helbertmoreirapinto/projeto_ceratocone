const { Schema, model } = require('mongoose')

let ExamAns = new Schema({
  examId: {
    type: Number,
    required: true
  },

  userId: {
    type: Number,
    required: true
  },

  answerId: {
    type: Number,
    required: true
  }

}, {
  collection: 'exams-answers',
  strict: false,
  timestamps: true
})

ExamAns = model('ExamAns', ExamAns)

module.exports = ExamAns
