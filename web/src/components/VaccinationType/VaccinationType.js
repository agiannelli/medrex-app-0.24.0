import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/VaccinationTypesCell'

const DELETE_VACCINATION_TYPE_MUTATION = gql`
  mutation DeleteVaccinationTypeMutation($id: Int!) {
    deleteVaccinationType(id: $id) {
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

const VaccinationType = ({ vaccinationType }) => {
  const { addMessage } = useFlash()
  const [deleteVaccinationType] = useMutation(
    DELETE_VACCINATION_TYPE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vaccinationTypes())
        addMessage('VaccinationType deleted.', { classes: 'rw-flash-success' })
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            VaccinationType {vaccinationType.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vaccinationType.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(vaccinationType.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(vaccinationType.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{vaccinationType.name}</td>
            </tr>
            <tr>
              <th>Is recurring</th>
              <td>{checkboxInputTag(vaccinationType.isRecurring)}</td>
            </tr>
            <tr>
              <th>Recurrence type</th>
              <td>{vaccinationType.recurrenceType}</td>
            </tr>
            <tr>
              <th>Recurrence interval</th>
              <td>{vaccinationType.recurrenceInterval}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVaccinationType({ id: vaccinationType.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vaccinationType.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default VaccinationType
