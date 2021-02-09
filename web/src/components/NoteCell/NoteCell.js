import Note from 'src/components/Note'

export const QUERY = gql`
  query FIND_NOTE_BY_ID($id: String!) {
    note: note(id: $id) {
      id
      createdAt
      updatedAt
      ownerId
      ownerType
      message
      requireFollowUp
      followUpDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Note not found</div>

export const Success = ({ note }) => {
  return <Note note={note} />
}
