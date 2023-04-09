import { Link } from 'react-router-dom'

export const ErrorPage = (): any => {
  return (
    <div id="error-page">
      {/* {error.statusText || error.message} ?
      <p>
        <div>{error.statusText}</div>
      </p>
      : */}
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  )
}
