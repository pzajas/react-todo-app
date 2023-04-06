import { HTTP_URLS } from '../../libs/http'
import { useState, useEffect, FormEvent } from 'react'

import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'

const initialValues = {
  username: '',
  password: '',
}

const cookies = new Cookies()

export const LoginForm = (): any => {
  const [userData, setUserData] = useState(initialValues)

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
      })
      .catch((err) => console.log(err))
  }

  const handleOnChange = (e: FormEvent<any>) => {
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
