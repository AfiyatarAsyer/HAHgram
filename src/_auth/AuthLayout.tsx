import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  // ini merupakan validasi
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ):(
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout