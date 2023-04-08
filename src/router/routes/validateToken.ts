import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'

const validateToken = () => {
  const cookies = new Cookies()
  const token = cookies.get('token')

  let decoded: any

  try {
    const decodedToken: any = jwtDecode(token)
    decoded = decodedToken.exp > Date.now() / 1000
  } catch (error) {
    console.log(error)
  }

  return decoded
}

export default validateToken
