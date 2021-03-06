const { Schema, model } = require('mongoose')

let ExamAnswerModel = new Schema({

  userId: {
    type: String,
    required: true
  },

  examId: {
    type: String,
    required: true
  },

  answer: {
    type: Number,
    required: true
  }

}, {
  collection: 'user-answers',
  strict: false,
  timestamps: true
})

ExamAnswerModel = model('ExamAnswerModel', ExamAnswerModel)

module.exports = ExamAnswerModel
