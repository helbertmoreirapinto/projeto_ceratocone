const { gql } = require('apollo-server')

module.exports = gql`
  scalar Date
  scalar File

  extend type Query {
    nextExam: Exam

    test(
      arg1:String!
    ): String

  }

  extend type Mutation {
    examAns (
      examId: ID!
      answer: Int!
    ): Boolean
  }

  type Exam {
    examId: ID
    file: File
    patientAge: Int
    examDate: Date
  }
`