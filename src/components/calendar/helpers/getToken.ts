import Cookies from 'universal-cookie'

export const getToken = (): string => {
  const cookies = new Cookies()
  const token: string = cookies.get('token')

  return token
}
