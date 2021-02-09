export const schema = gql`
  type VaccinationType {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    isRecurring: Boolean!
    recurrenceType: Int!
    recurrenceInterval: Int!
  }

  type Query {
    vaccinationTypes: [VaccinationType!]!
    vaccinationType(id: Int!): VaccinationType
  }

  input CreateVaccinationTypeInput {
    name: String!
    isRecurring: Boolean!
    recurrenceType: Int!
    recurrenceInterval: Int!
  }

  input UpdateVaccinationTypeInput {
    name: String
    isRecurring: Boolean
    recurrenceType: Int
    recurrenceInterval: Int
  }

  type Mutation {
    createVaccinationType(input: CreateVaccinationTypeInput!): VaccinationType!
    updateVaccinationType(
      id: Int!
      input: UpdateVaccinationTypeInput!
    ): VaccinationType!
    deleteVaccinationType(id: Int!): VaccinationType!
  }
`
