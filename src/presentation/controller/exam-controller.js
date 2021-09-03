const ExamAnswerModel = require('../../infra/db/sqlite/model/resposta')
const UserModel = require('../../infra/db/sqlite/model/usuario')

const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')

const getExam = async (parent, args, context) => {
  const { userId: usuarioId } = args

  const user = await UserModel.findByPk(usuarioId)
  const exameAtual = user.exameAtual || 0

  const totalExams = await csvtojson().fromFile(path.join(__dirname, '..', '..', '..', 'info.csv'))
  if (totalExams.length === exameAtual + 1) return null

  for (let i = exameAtual; i < totalExams.length; i++) {
    const exam = totalExams[i]
    const { image, tkc = 'ND', badd = 'ND', isv = 'ND' } = exam
    const infosSplit = image.split('_')
    const patientId = infosSplit[0]
    const examDate = infosSplit[2]
    const examHour = infosSplit[3]

    const examId = `${patientId}_${examDate}_${examHour}`

    let file
    try {
      file = fs.readFileSync(path.join(__dirname, '..', '..', '..', 'exam-files', image))
    } catch { continue }

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
  const user = await UserModel.findByPk(userId)

  await user.update({ exameAtual: user.exameAtual + 1 })
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
