import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/VaccinationRecordsCell'

const DELETE_VACCINATION_RECORD_MUTATION = gql`
  mutation DeleteVaccinationRecordMutation($id: String!) {
    deleteVaccinationRecord(id: $id) {
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

const VaccinationRecord = ({ vaccinationRecord }) => {
  const { addMessage } = useFlash()
  const [deleteVaccinationRecord] = useMutation(
    DELETE_VACCINATION_RECORD_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vaccinationRecords())
        addMessage('VaccinationRecord deleted.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete vaccinationRecord ' + id + '?')
    ) {
      deleteVaccinationRecord({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            VaccinationRecord {vaccinationRecord.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vaccinationRecord.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(vaccinationRecord.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(vaccinationRecord.updatedAt)}</td>
            </tr>
            <tr>
              <th>Student id</th>
              <td>{vaccinationRecord.studentId}</td>
            </tr>
            <tr>
              <th>Vaccination type</th>
              <td>{vaccinationRecord.vaccinationType}</td>
            </tr>
            <tr>
              <th>Vaccination date</th>
              <td>{timeTag(vaccinationRecord.vaccinationDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVaccinationRecord({ id: vaccinationRecord.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vaccinationRecord.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default VaccinationRecord
