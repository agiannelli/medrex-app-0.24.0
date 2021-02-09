export const schema = gql`
  type VaccinationRecord {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    studentId: Int!
    vaccinationType: Int!
    vaccinationDate: DateTime!
  }

  type Query {
    vaccinationRecords: [VaccinationRecord!]!
    vaccinationRecord(id: String!): VaccinationRecord
  }

  input CreateVaccinationRecordInput {
    studentId: Int!
    vaccinationType: Int!
    vaccinationDate: DateTime!
  }

  input UpdateVaccinationRecordInput {
    studentId: Int
    vaccinationType: Int
    vaccinationDate: DateTime
  }

  type Mutation {
    createVaccinationRecord(
      input: CreateVaccinationRecordInput!
    ): VaccinationRecord!
    updateVaccinationRecord(
      id: String!
      input: UpdateVaccinationRecordInput!
    ): VaccinationRecord!
    deleteVaccinationRecord(id: String!): VaccinationRecord!
  }
`
