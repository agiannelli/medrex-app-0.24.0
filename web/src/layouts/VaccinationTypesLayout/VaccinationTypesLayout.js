import { Link, routes } from '@redwoodjs/router'
import AdminLayout from '../AdminLayout/AdminLayout'

const VaccinationTypesLayout = (props) => {
  return (
    <AdminLayout>
      <div className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.vaccinationTypes()} className="rw-link">
            VaccinationTypes
          </Link>
        </h1>
        <Link
          to={routes.newVaccinationType()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New VaccinationType
        </Link>
      </div>
      <div className="rw-main">{props.children}</div>
    </AdminLayout>
  )
}

export default VaccinationTypesLayout
