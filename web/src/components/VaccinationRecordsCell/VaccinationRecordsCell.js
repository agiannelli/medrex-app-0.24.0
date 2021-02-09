import { Link, routes } from '@redwoodjs/router'

import VaccinationRecords from 'src/components/VaccinationRecords'

export const QUERY = gql`
  query VACCINATION_RECORDS {
    vaccinationRecords {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vaccinationRecords yet. '}
      <Link to={routes.newVaccinationRecord()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ vaccinationRecords }) => {
  return <VaccinationRecords vaccinationRecords={vaccinationRecords} />
}
