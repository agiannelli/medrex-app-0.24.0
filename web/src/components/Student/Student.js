import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/StudentsCell'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: String!) {
    deleteStudent(id: $id) {
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

const Student = ({ student }) => {
  const { addMessage } = useFlash()
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.students())
      addMessage('Student deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Student {student.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(student.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(student.updatedAt)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{student.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Student
