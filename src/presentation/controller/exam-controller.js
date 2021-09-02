const ExamAnswerModel = require('../../infra/db/sqlite/model/resposta')
const csvtojson = require('csvtojson')

const fs = require('fs')
const path = require('path')

const getExam = async (parent, args, context) => {
  const { userId: usuarioId } = args

  const userAnswers = await ExamAnswerModel.findAll({ usuarioId })
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

    if (userAnswers.find(ans =>
      +ans.patientId === +patientId &&
      +ans.examDate === +examDate &&
      +ans.examHour === +examHour
    )) continue

    return {
      examId,
      file,
      age: 99, // ver necessidade
      tkc,
      badd,
      isv
    }
  }
}

const examAnswer = async (parent, args, context) => {
  const { userId, examId, answer } = args
  const infosSplit = examId.split('_')
  const [patientId, examDate, examHour] = infosSplit

  await ExamAnswerModel.create({
    usuarioId: userId,
    patientId,
    examDate,
    examHour,
    resposta: answer
  })
}

module.exports = {
  getExam,
  examAnswer
}
