import { Link, routes } from '@redwoodjs/router'

import AdminLayout from '../AdminLayout/AdminLayout'

const StudentsLayout = (props) => {
  return (
    <AdminLayout>
      <div className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.students()} className="rw-link">
            Students
          </Link>
        </h1>
        <Link to={routes.newStudent()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Student
        </Link>
      </div>
      <div className="rw-main">{props.children}</div>
    </AdminLayout>
  )
}

export default StudentsLayout
