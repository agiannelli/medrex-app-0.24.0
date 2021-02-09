import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VaccinationTypeForm from 'src/components/VaccinationTypeForm'

import { QUERY } from 'src/components/VaccinationTypesCell'

const CREATE_VACCINATION_TYPE_MUTATION = gql`
  mutation CreateVaccinationTypeMutation($input: CreateVaccinationTypeInput!) {
    createVaccinationType(input: $input) {
      id
    }
  }
`

const NewVaccinationType = () => {
  const { addMessage } = useFlash()
  const [createVaccinationType, { loading, error }] = useMutation(
    CREATE_VACCINATION_TYPE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vaccinationTypes())
        addMessage('VaccinationType created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createVaccinationType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New VaccinationType</h2>
      </header>
      <div className="rw-segment-main">
        <VaccinationTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVaccinationType
