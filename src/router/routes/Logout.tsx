import { Link } from 'react-router-dom'
import { changeTokenState } from '../../redux/features/tokenSlice'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const Logout = (): any => {
  const dispatch = useDispatch()

  const removeCookie = (): any => {
    cookie.remove('token')

    dispatch(changeTokenState(0))
  }

  return (
    <div>
      <button onClick={removeCookie}>Logout</button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Logout
