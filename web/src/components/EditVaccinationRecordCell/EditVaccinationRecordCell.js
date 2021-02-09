import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VaccinationRecordForm from 'src/components/VaccinationRecordForm'

export const QUERY = gql`
  query FIND_VACCINATION_RECORD_BY_ID($id: String!) {
    vaccinationRecord: vaccinationRecord(id: $id) {
      id
      createdAt
      updatedAt
      studentId
      vaccinationType
      vaccinationDate
    }
  }
`
const UPDATE_VACCINATION_RECORD_MUTATION = gql`
  mutation UpdateVaccinationRecordMutation(
    $id: String!
    $input: UpdateVaccinationRecordInput!
  ) {
    updateVaccinationRecord(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      studentId
      vaccinationType
      vaccinationDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ vaccinationRecord }) => {
  const { addMessage } = useFlash()
  const [updateVaccinationRecord, { loading, error }] = useMutation(
    UPDATE_VACCINATION_RECORD_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vaccinationRecords())
        addMessage('VaccinationRecord updated.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      studentId: parseInt(input.studentId),
    })
    updateVaccinationRecord({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit VaccinationRecord {vaccinationRecord.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VaccinationRecordForm
          vaccinationRecord={vaccinationRecord}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
