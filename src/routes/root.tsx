import { NavLink, Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/logout">LOGOUT</NavLink>

          <NavLink to="/home">Home</NavLink>
          <NavLink to="/auth/todos"> TODOS</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
