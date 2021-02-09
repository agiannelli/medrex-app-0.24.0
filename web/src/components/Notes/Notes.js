import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/NotesCell'

const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNoteMutation($id: String!) {
    deleteNote(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const NotesList = ({ notes }) => {
  const { addMessage } = useFlash()
  const [deleteNote] = useMutation(DELETE_NOTE_MUTATION, {
    onCompleted: () => {
      addMessage('Note deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete note ' + id + '?')) {
      deleteNote({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Owner id</th>
            <th>Owner type</th>
            <th>Message</th>
            <th>Require follow up</th>
            <th>Follow up date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{truncate(note.id)}</td>
              <td>{timeTag(note.createdAt)}</td>
              <td>{timeTag(note.updatedAt)}</td>
              <td>{truncate(note.ownerId)}</td>
              <td>{truncate(note.ownerType)}</td>
              <td>{truncate(note.message)}</td>
              <td>{checkboxInputTag(note.requireFollowUp)}</td>
              <td>{timeTag(note.followUpDate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.note({ id: note.id })}
                    title={'Show note ' + note.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNote({ id: note.id })}
                    title={'Edit note ' + note.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete note ' + note.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(note.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NotesList
