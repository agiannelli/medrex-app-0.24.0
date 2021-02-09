import { Link, routes } from '@redwoodjs/router'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const HomePage = () => {
  return (
    <AdminLayout>
      <div className="rw-main">
        <h3>Quick Links:</h3>
        <ul>
          <li>
            <Link to={routes.students()}>Students</Link>
          </li>
          <li>
            <Link to={routes.vaccinationRecords()}>Vaccination Records</Link>
          </li>
          <li>
            <Link to={routes.vaccinationTypes()}>Vaccination Types</Link>
          </li>
          <li>
            <Link to={routes.notes()}>Notes</Link>
          </li>
        </ul>
      </div>
    </AdminLayout>
  )
}

export default HomePage
