import { HTTP_URLS } from '../libs/http'
import { LoginSchema } from '../validation/schemas/LoginSchema'
import { changeTokenState } from '../redux/features/tokenSlice'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  type IDispatch,
  type IFormData,
  type IReset,
  type IResolver,
} from '../typescript/types/types'

import axios, { type AxiosResponse } from 'axios'
import jwtDecode, { type JwtPayload } from 'jwt-decode'

import Cookies from 'universal-cookie'

export const onSubmit = async (
  data: IFormData,
  reset: IReset,
  dispatch: IDispatch
): Promise<void> => {
  const cookies = new Cookies()

  try {
    const response: AxiosResponse<{ token: string }> = await axios.post(
      HTTP_URLS.LOGIN,
      {
        username: data.username,
        password: data.password,
      }
    )

    const token: string = response.data.token
    jwtDecode<JwtPayload>(token)

    cookies.set('token', token)
    dispatch(changeTokenState(Date.now()))

    reset()
  } catch (err: any) {
    console.log(err.response.data)
    dispatch(changeTokenState(0))
  }
}

export const resolverOptions: IResolver = {
  resolver: yupResolver(LoginSchema),
  mode: 'onChange',
}
