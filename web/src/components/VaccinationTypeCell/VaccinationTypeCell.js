import VaccinationType from 'src/components/VaccinationType'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>VaccinationType not found</div>

export const Success = ({ vaccinationType }) => {
  return <VaccinationType vaccinationType={vaccinationType} />
}
