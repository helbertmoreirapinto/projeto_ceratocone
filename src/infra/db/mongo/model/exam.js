const { Schema, model } = require('mongoose')

let Exam = new Schema({
  examId: {
    type: Number,
    required: true
  },

  patientAge: {
    type: Number,
    required: true
  },

  patientId: {
    type: Number,
    required: true
  }

}, {
  collection: 'exams',
  strict: false,
  timestamps: true
})

Exam = model('Exam', Exam)

module.exports = Exam
