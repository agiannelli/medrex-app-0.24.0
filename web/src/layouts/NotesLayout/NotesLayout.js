import { Link, routes } from '@redwoodjs/router'
import AdminLayout from '../AdminLayout/AdminLayout'

const NotesLayout = (props) => {
  return (
    <AdminLayout>
      <div className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.notes()} className="rw-link">
            Notes
          </Link>
        </h1>
        <Link to={routes.newNote()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Note
        </Link>
      </div>
      <div className="rw-main">{props.children}</div>
    </AdminLayout>
  )
}

export default NotesLayout
