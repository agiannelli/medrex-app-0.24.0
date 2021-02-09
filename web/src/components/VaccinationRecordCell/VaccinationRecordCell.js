import VaccinationRecord from 'src/components/VaccinationRecord'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>VaccinationRecord not found</div>

export const Success = ({ vaccinationRecord }) => {
  return <VaccinationRecord vaccinationRecord={vaccinationRecord} />
}
