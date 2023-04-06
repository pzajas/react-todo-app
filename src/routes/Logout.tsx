import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const Logout = () => {
  const removeCookie = () => {
    cookie.remove('token')
  }

  return (
    <div>
      <button onClick={removeCookie}>Logout</button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Logout
