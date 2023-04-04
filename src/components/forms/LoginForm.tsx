import { HTTP_URLS } from '../../libs/http'
import { useState, FormEvent } from 'react'

import axios from 'axios'

const initialValues = {
  username: '',
  password: '',
  email: '',
}

const LoginForm = (): any => {
  const [userData, setUserData] = useState(initialValues)

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    await axios
      .post(HTTP_URLS.REGISTER, {
        username: userData.username,
        password: userData.password,
        email: userData.email,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err.response.data))
  }

  const handleOnChange = (e: FormEvent<any>) => {
    const { name, value } = e.currentTarget

    setUserData({
      ...userData,
      [name]: value,
    })
  }
  return (
    <div>
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
        <input
          name="email"
          value={userData.email}
          onChange={handleOnChange}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginForm
