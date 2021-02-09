import { Link, routes } from '@redwoodjs/router'

import Notes from 'src/components/Notes'

export const QUERY = gql`
  query NOTES {
    notes {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No notes yet. '}
      <Link to={routes.newNote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ notes }) => {
  return <Notes notes={notes} />
}
