import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { changeTokenState } from '../../redux/features/tokenSlice'

const cookie = new Cookies()

const Logout = () => {
  const dispatch = useDispatch()

  const removeCookie = () => {
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
