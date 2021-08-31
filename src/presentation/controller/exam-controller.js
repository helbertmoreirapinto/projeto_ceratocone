const ExamAnswerModel = require('../../infra/db/mongo/model/exam-ans')
const csvtojson = require('csvtojson')

const fs = require('fs')
const path = require('path')

const getExam = async (parent, args, context) => {
  const { userId } = args

  const userAnswers = await ExamAnswerModel.find({ userId })
  const totalExams = await csvtojson().fromFile(path.join(__dirname, '..', '..', '..', 'info.csv'))
  if (totalExams.length === userAnswers.length) return null

  for (const exam of totalExams) {
    console.log(exam)
    const { image, info01 = 'ND', info02 = 'ND', info03 = 'ND', info04 = 'ND' } = exam
    const infosSplit = image.split('_')
    const [patientId, examSide, examDate, examHour] = infosSplit
    const examId = `${patientId}_${examDate}_${examHour}`

    let file
    try {
      file = fs.readFileSync(path.join(__dirname, '..', '..', '..', 'exam-files', image))
    } catch { continue }

    if (userAnswers.find(ans => ans.examId === examId)) continue

    return {
      examId,
      file,
      patientAge: 99,
      info01,
      info02,
      info03,
      info04
    }
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
