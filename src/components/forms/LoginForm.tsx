import { HTTP_URLS } from '../../libs/http'
import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeTokenState } from '../../redux/features/tokenSlice'

import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'

const initialValues = {
  username: '',
  password: '',
}

const cookies = new Cookies()

export const LoginForm = (): any => {
  const [userData, setUserData] = useState(initialValues)
  const dispatch = useDispatch()

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    await axios
      .post(HTTP_URLS.LOGIN, {
        username: userData.username,
        password: userData.password,
      })
      .then((response) => {
        const token = response.data.token
        jwtDecode(token)

        cookies.set('token', token)
        dispatch(changeTokenState(true))
      })
      .catch((err: string) => console.log(err))
  }

  const handleOnChange = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget

    setUserData({
      ...userData,
      [name]: value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={userData.username}
          onChange={handleOnChange}
        />
        <input
          name="password"
          value={userData.password}
          onChange={handleOnChange}
        />
        <input type="submit" />
      </form>

      <Link to="/">Home</Link>
    </>
  )
}
