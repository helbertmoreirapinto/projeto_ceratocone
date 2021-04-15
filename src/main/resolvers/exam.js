const examController = require('../../presentation/controller/exam-controller')

module.exports = {
  Query: {
    nextExam: examController.getExam,
    test: async (parent, args, context) => {
      const { arg1 } = args
      return `parametro recebido =>${arg1}`
    }
  },
  Mutation: {
    examAns: examController.examAnswer
  }
}
