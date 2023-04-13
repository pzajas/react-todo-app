import { AuthenticationSchema } from '../validation/schemas/authenticationSchema'
import { HTTP_URLS } from '@libs/http'
import { changeTokenState } from '../redux/features/tokenSlice'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  type IDispatch,
  type IFormData,
  type IReset,
  type IResolver,
} from '../typescript/types/types'

import axios from 'axios'
import jwtDecode, { type JwtPayload } from 'jwt-decode'

import Cookies from 'universal-cookie'

export const onSubmit = async (
  data: IFormData,
  reset: IReset,
  dispatch: IDispatch,
  navigate: (path: string) => void
): Promise<void> => {
  const cookies = new Cookies()

  try {
    const response: any = await axios.post(HTTP_URLS.LOGIN, {
      email: data.email,
      password: data.password,
    })

    const token: string = response.data.token
    jwtDecode<JwtPayload>(token)

    cookies.set('token', token)
    dispatch(changeTokenState(Date.now()))

    reset()

    navigate('/auth/todos', { replace: true })
  } catch (err: any) {
    console.log(err.response.data)
    dispatch(changeTokenState(0))
  }
}

export const resolverOptions: IResolver = {
  resolver: yupResolver(AuthenticationSchema),
  mode: 'onChange',
}
