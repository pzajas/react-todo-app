import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { changeTokenState } from '../../redux/features/tokenSlice'
import validateToken from './validateToken'

const ProtectedRoutes = () => {
  const isValidToken = validateToken()
  const dispatch = useDispatch()

  if (isValidToken) {
    dispatch(changeTokenState(Date.now()))
  } else {
    dispatch(changeTokenState(0))
  }

  return isValidToken === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default ProtectedRoutes
