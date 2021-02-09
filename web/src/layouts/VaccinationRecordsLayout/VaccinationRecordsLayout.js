import { Link, routes } from '@redwoodjs/router'
import AdminLayout from '../AdminLayout/AdminLayout'

const VaccinationRecordsLayout = (props) => {
  return (
    <AdminLayout>
      <div className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.vaccinationRecords()} className="rw-link">
            VaccinationRecords
          </Link>
        </h1>
        <Link
          to={routes.newVaccinationRecord()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New VaccinationRecord
        </Link>
      </div>
      <div className="rw-main">{props.children}</div>
    </AdminLayout>
  )
}

export default VaccinationRecordsLayout
