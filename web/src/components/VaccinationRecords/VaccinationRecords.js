import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/VaccinationRecordsCell'

const DELETE_VACCINATION_RECORD_MUTATION = gql`
  mutation DeleteVaccinationRecordMutation($id: String!) {
    deleteVaccinationRecord(id: $id) {
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

const VaccinationRecordsList = ({ vaccinationRecords }) => {
  const { addMessage } = useFlash()
  const [deleteVaccinationRecord] = useMutation(
    DELETE_VACCINATION_RECORD_MUTATION,
    {
      onCompleted: () => {
        addMessage('VaccinationRecord deleted.', {
          classes: 'rw-flash-success',
        })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Student id</th>
            <th>Vaccination type</th>
            <th>Vaccination date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vaccinationRecords.map((vaccinationRecord) => (
            <tr key={vaccinationRecord.id}>
              <td>{truncate(vaccinationRecord.id)}</td>
              <td>{timeTag(vaccinationRecord.createdAt)}</td>
              <td>{timeTag(vaccinationRecord.updatedAt)}</td>
              <td>{truncate(vaccinationRecord.studentId)}</td>
              <td>{truncate(vaccinationRecord.vaccinationType)}</td>
              <td>{timeTag(vaccinationRecord.vaccinationDate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vaccinationRecord({ id: vaccinationRecord.id })}
                    title={
                      'Show vaccinationRecord ' +
                      vaccinationRecord.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVaccinationRecord({
                      id: vaccinationRecord.id,
                    })}
                    title={'Edit vaccinationRecord ' + vaccinationRecord.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete vaccinationRecord ' + vaccinationRecord.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vaccinationRecord.id)}
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

export default VaccinationRecordsList
