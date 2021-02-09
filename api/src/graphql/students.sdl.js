export const schema = gql`
  type Student {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
  }

  type Query {
    students: [Student!]!
    student(id: String!): Student
  }

  input CreateStudentInput {
    email: String!
    name: String!
  }

  input UpdateStudentInput {
    email: String
    name: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(id: String!, input: UpdateStudentInput!): Student!
    deleteStudent(id: String!): Student!
  }
`
