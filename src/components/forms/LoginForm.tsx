import { HTTP_URLS } from '../../libs/http'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTokenState } from '../../redux/features/tokenSlice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import { LoginSchema } from '../../validation/schemas/LoginSchema'

import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const LoginForm = (): any => {
  const [data, setData] = useState(0)

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: any) => {
    axios
      .post(HTTP_URLS.LOGIN, {
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        const token = response.data.token
        jwtDecode(token)

        cookies.set('token', token)
        dispatch(changeTokenState(Date.now()))

        setData(Date.now())
        reset()
      })
      .catch((err: string) => {
        dispatch(changeTokenState(0))
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} />
        <ErrorMessage errors={errors} name="username" />

        <input {...register('password')} />
        <ErrorMessage errors={errors} name="password" />

        <input type="submit" />
      </form>
    </div>
  )
}
