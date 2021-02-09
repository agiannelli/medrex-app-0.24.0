import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VaccinationTypeForm from 'src/components/VaccinationTypeForm'

export const QUERY = gql`
  query FIND_VACCINATION_TYPE_BY_ID($id: Int!) {
    vaccinationType: vaccinationType(id: $id) {
      id
      createdAt
      updatedAt
      name
      isRecurring
      recurrenceType
      recurrenceInterval
    }
  }
`
const UPDATE_VACCINATION_TYPE_MUTATION = gql`
  mutation UpdateVaccinationTypeMutation(
    $id: Int!
    $input: UpdateVaccinationTypeInput!
  ) {
    updateVaccinationType(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      name
      isRecurring
      recurrenceType
      recurrenceInterval
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ vaccinationType }) => {
  const { addMessage } = useFlash()
  const [updateVaccinationType, { loading, error }] = useMutation(
    UPDATE_VACCINATION_TYPE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vaccinationTypes())
        addMessage('VaccinationType updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateVaccinationType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit VaccinationType {vaccinationType.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VaccinationTypeForm
          vaccinationType={vaccinationType}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
