import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const AdminLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  var authClick = isAuthenticated ? logOut : logIn
  var authButtonText = isAuthenticated ? 'Log Out' : 'Log In'
  var authButtonClass =
    'rw-button rw-button-' + (isAuthenticated ? 'red' : 'blue')

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
          <div className="rw-button-group">
            <div>{isAuthenticated && currentUser.email}</div>
            <button className={authButtonClass} onClick={authClick}>
              {authButtonText}
            </button>
          </div>
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
