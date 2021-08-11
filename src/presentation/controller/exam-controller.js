const ExamModel = require('../../infra/db/sqlite3/model/exam')
const ExamAnswerModel = require('../../infra/db/sqlite3/model/exam-ans')

const fs = require('fs')
const path = require('path')

const getExam = async (parent, args, context) => {
  const { userId } = args

  const userAnswers = await ExamAnswerModel.find({ userId })
  const totalExams = fs.readdirSync(path.join(__dirname, '..', '..', '..', 'exam-files'))

  let examId
  do {
    examId = Math.floor(totalExams.length * Math.random() + 1)
    if (totalExams.length === userAnswers.length) return null
  } while (userAnswers.some(userAns => +userAns.examId === +examId))

  const { patientAge } = await ExamModel.findOne({ examId })

  const file = fs.readFileSync(path.join(__dirname, '..', '..', '..', 'exam-files', `img${examId}.png`))

  return {
    examId,
    file,
    patientAge,
    examDate: new Date()
  }
}

const examAnswer = async (parent, args, context) => {
  const { userId, examId, answer } = args

  await ExamAnswerModel.create({ userId, examId, answer })
}

module.exports = {
  getExam,
  examAnswer
}
