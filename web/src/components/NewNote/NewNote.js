import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import NoteForm from 'src/components/NoteForm'

import { QUERY } from 'src/components/NotesCell'

const CREATE_NOTE_MUTATION = gql`
  mutation CreateNoteMutation($input: CreateNoteInput!) {
    createNote(input: $input) {
      id
    }
  }
`

const NewNote = () => {
  const { addMessage } = useFlash()
  const [createNote, { loading, error }] = useMutation(CREATE_NOTE_MUTATION, {
    onCompleted: () => {
      navigate(routes.notes())
      addMessage('Note created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createNote({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Note</h2>
      </header>
      <div className="rw-segment-main">
        <NoteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNote
