const { gql } = require('apollo-server')

module.exports = gql`
  scalar Date
  scalar File

  extend type Query {
    nextExam(
      userId: ID!
    ): Exam

    test(
      arg1:String!
    ): String

  }

  extend type Mutation {
    examAns (
      userId: ID!
      examId: ID!
      answer: Int!
    ): Exam
  }

  type Exam {
    examId: ID
    file: File
    patientAge: Int
    examDate: Date
  }
`
