import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { changeTokenState } from '../../redux/features/tokenSlice'
import validateToken from './validateToken'

const ProtectedRoutes = () => {
  const isValidToken = validateToken()
  const dispatch = useDispatch()

  console.log(isValidToken)

  if (isValidToken) {
    dispatch(changeTokenState(true))
  } else {
    dispatch(changeTokenState(false))
  }

  return isValidToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default ProtectedRoutes
