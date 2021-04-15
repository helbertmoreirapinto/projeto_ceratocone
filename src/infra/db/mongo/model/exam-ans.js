const { Schema, model } = require('mongoose')

let Exam = new Schema({
  url: {
    type: String,
    required: true
  },

  examDate: {
    type: Date,
    required: true
  },

  birthPatient: {
    type: Date,
    required: true
  }

}, {
  collection: 'exams',
  strict: false,
  timestamps: true
})

Exam = model('Exam', Exam)

module.exports = Exam
