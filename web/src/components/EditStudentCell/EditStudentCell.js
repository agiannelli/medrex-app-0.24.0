import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StudentForm from 'src/components/StudentForm'

export const QUERY = gql`
  query FIND_STUDENT_BY_ID($id: String!) {
    student: student(id: $id) {
      id
      createdAt
      updatedAt
      email
      name
    }
  }
`
const UPDATE_STUDENT_MUTATION = gql`
  mutation UpdateStudentMutation($id: String!, $input: UpdateStudentInput!) {
    updateStudent(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      email
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ student }) => {
  const { addMessage } = useFlash()
  const [updateStudent, { loading, error }] = useMutation(
    UPDATE_STUDENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.students())
        addMessage('Student updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateStudent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Student {student.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudentForm
          student={student}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
