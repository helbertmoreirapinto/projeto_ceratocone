const { gql } = require('apollo-server')

module.exports = gql`
  scalar Date
  scalar File

  extend type Query {
    nextExam(
      userId: String!
    ): Exam
  }

  extend type Mutation {
    examAns (
      userId: String!
      examId: String!
      answer: Int!
    ): Boolean
  }

  type Exam {
    examId: String
    file: File
    age: Int
    tkc: String
    badd: String
    isv: String
  }
`
