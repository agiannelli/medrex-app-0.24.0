import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/VaccinationTypesCell'

const DELETE_VACCINATION_TYPE_MUTATION = gql`
  mutation DeleteVaccinationTypeMutation($id: Int!) {
    deleteVaccinationType(id: $id) {
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

const VaccinationTypesList = ({ vaccinationTypes }) => {
  const { addMessage } = useFlash()
  const [deleteVaccinationType] = useMutation(
    DELETE_VACCINATION_TYPE_MUTATION,
    {
      onCompleted: () => {
        addMessage('VaccinationType deleted.', { classes: 'rw-flash-success' })
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
      confirm('Are you sure you want to delete vaccinationType ' + id + '?')
    ) {
      deleteVaccinationType({ variables: { id } })
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
            <th>Name</th>
            <th>Is recurring</th>
            <th>Recurrence type</th>
            <th>Recurrence interval</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vaccinationTypes.map((vaccinationType) => (
            <tr key={vaccinationType.id}>
              <td>{truncate(vaccinationType.id)}</td>
              <td>{timeTag(vaccinationType.createdAt)}</td>
              <td>{timeTag(vaccinationType.updatedAt)}</td>
              <td>{truncate(vaccinationType.name)}</td>
              <td>{checkboxInputTag(vaccinationType.isRecurring)}</td>
              <td>{truncate(vaccinationType.recurrenceType)}</td>
              <td>{truncate(vaccinationType.recurrenceInterval)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vaccinationType({ id: vaccinationType.id })}
                    title={
                      'Show vaccinationType ' + vaccinationType.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVaccinationType({ id: vaccinationType.id })}
                    title={'Edit vaccinationType ' + vaccinationType.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete vaccinationType ' + vaccinationType.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vaccinationType.id)}
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

export default VaccinationTypesList
