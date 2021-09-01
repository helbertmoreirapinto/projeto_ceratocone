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
    const { image, tkc = 'ND', badd = 'ND', isv = 'ND' } = exam
    const infosSplit = image.split('_')
    const [patientId, side, examDate, examHour] = infosSplit
    const examId = `${patientId}_${examDate}_${examHour}`
    console.log(side)

    let file
    try {
      file = fs.readFileSync(path.join(__dirname, '..', '..', '..', 'exam-files', image))
    } catch { continue }

    if (userAnswers.find(ans => ans.examId === examId)) continue

    return {
      examId,
      file,
      age: 99,
      tkc,
      badd,
      isv
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
