import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/StudentsCell'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: String!) {
    deleteStudent(id: $id) {
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

const StudentsList = ({ students }) => {
  const { addMessage } = useFlash()
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      addMessage('Student deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
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
            <th>Email</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{truncate(student.id)}</td>
              <td>{timeTag(student.createdAt)}</td>
              <td>{timeTag(student.updatedAt)}</td>
              <td>{truncate(student.email)}</td>
              <td>{truncate(student.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.student({ id: student.id })}
                    title={'Show student ' + student.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudent({ id: student.id })}
                    title={'Edit student ' + student.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete student ' + student.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(student.id)}
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

export default StudentsList
