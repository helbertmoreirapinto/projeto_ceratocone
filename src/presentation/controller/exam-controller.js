const fs = require('fs')
const path = require('path')

const getExam = async (parent, args, context) => {
  console.log(args.userId)
  const file = fs.readFileSync(path.join(__dirname, 'send_img.png'))
  return {
    examId: 2,
    file,
    patientAge: 22,
    examDate: new Date()

  }
}

const examAnswer = async (parent, args, context) => {
  const { userId, examId, answerId } = args

  console.log(args)
  const file = fs.readFileSync(path.join(__dirname, 'send_img1.png'))
  return {
    examId: 5,
    file,
    patientAge: 19,
    examDate: new Date()

  }
}

module.exports = {
  getExam,
  examAnswer
}
