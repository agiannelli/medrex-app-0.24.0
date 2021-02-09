import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VaccinationRecordForm from 'src/components/VaccinationRecordForm'

import { QUERY } from 'src/components/VaccinationRecordsCell'

const CREATE_VACCINATION_RECORD_MUTATION = gql`
  mutation CreateVaccinationRecordMutation(
    $input: CreateVaccinationRecordInput!
  ) {
    createVaccinationRecord(input: $input) {
      id
    }
  }
`

const NewVaccinationRecord = () => {
  const { addMessage } = useFlash()
  const [createVaccinationRecord, { loading, error }] = useMutation(
    CREATE_VACCINATION_RECORD_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vaccinationRecords())
        addMessage('VaccinationRecord created.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      studentId: parseInt(input.studentId),
    })
    createVaccinationRecord({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New VaccinationRecord
        </h2>
      </header>
      <div className="rw-segment-main">
        <VaccinationRecordForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewVaccinationRecord
