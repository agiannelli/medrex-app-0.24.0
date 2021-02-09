import { Link, routes } from '@redwoodjs/router'

import VaccinationTypes from 'src/components/VaccinationTypes'

export const QUERY = gql`
  query VACCINATION_TYPES {
    vaccinationTypes {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vaccinationTypes yet. '}
      <Link to={routes.newVaccinationType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ vaccinationTypes }) => {
  return <VaccinationTypes vaccinationTypes={vaccinationTypes} />
}
