import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="rw-scaffold">
        <header className="rw-header">
          <Flash timeout={1000} />
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.home()} className="rw-link">
              MedRex
            </Link>
          </h1>
        </header>
        <main className="rw-main">{children}</main>
        <footer>
          <p>© 2021 giannelli.tech</p>
        </footer>
      </div>
    </>
  )
}

export default AdminLayout
