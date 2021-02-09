export const schema = gql`
  type Note {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    ownerId: String!
    ownerType: Int!
    message: String!
    requireFollowUp: Boolean!
    followUpDate: DateTime
  }

  type Query {
    notes: [Note!]!
    note(id: String!): Note
  }

  input CreateNoteInput {
    ownerId: String!
    ownerType: Int!
    message: String!
    requireFollowUp: Boolean!
    followUpDate: DateTime
  }

  input UpdateNoteInput {
    ownerId: String
    ownerType: Int
    message: String
    requireFollowUp: Boolean
    followUpDate: DateTime
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note!
    updateNote(id: String!, input: UpdateNoteInput!): Note!
    deleteNote(id: String!): Note!
  }
`
