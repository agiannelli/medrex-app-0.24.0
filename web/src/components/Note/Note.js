import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/NotesCell'

const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNoteMutation($id: String!) {
    deleteNote(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Note = ({ note }) => {
  const { addMessage } = useFlash()
  const [deleteNote] = useMutation(DELETE_NOTE_MUTATION, {
    onCompleted: () => {
      navigate(routes.notes())
      addMessage('Note deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete note ' + id + '?')) {
      deleteNote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Note {note.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{note.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(note.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(note.updatedAt)}</td>
            </tr>
            <tr>
              <th>Owner id</th>
              <td>{note.ownerId}</td>
            </tr>
            <tr>
              <th>Owner type</th>
              <td>{note.ownerType}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{note.message}</td>
            </tr>
            <tr>
              <th>Require follow up</th>
              <td>{checkboxInputTag(note.requireFollowUp)}</td>
            </tr>
            <tr>
              <th>Follow up date</th>
              <td>{timeTag(note.followUpDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNote({ id: note.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(note.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Note
