import NotesLayout from 'src/layouts/NotesLayout'
import NoteCell from 'src/components/NoteCell'

const NotePage = ({ id }) => {
  return (
    <NotesLayout>
      <NoteCell id={id} />
    </NotesLayout>
  )
}

export default NotePage
