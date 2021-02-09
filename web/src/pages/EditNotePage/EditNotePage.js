import NotesLayout from 'src/layouts/NotesLayout'
import EditNoteCell from 'src/components/EditNoteCell'

const EditNotePage = ({ id }) => {
  return (
    <NotesLayout>
      <EditNoteCell id={id} />
    </NotesLayout>
  )
}

export default EditNotePage
