const examController = require('../../presentation/controller/exam-controller')

module.exports = {
  Query: {
    nextExam: examController.getExam
  },

  Mutation: {
    examAns: examController.examAnswer
  }
}
