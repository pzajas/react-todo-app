import { NavLink, useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()

  let message: string
  let statusText: number

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <Link to="/login">Login</Link>
      </p>
      {/* <p>
        {error.statusText || error.message}?
        <div>xxxxxx</div> : <div>nope</div>
      </p> */}
    </div>
  )
}
