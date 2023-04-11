import { HTTP_URLS } from '../libs/http'
import { LoginSchema } from '../validation/schemas/LoginSchema'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  type IRegisterData,
  type IReset,
  type IResolver,
} from '../typescript/types/types'

import axios from 'axios'

export const RegisterSubmit = async (
  data: IRegisterData,
  reset: IReset
): Promise<void> => {
  try {
    const response: any = await axios.post(HTTP_URLS.REGISTER, {
      email: data.email,
      password: data.password,
    })

    console.log(response)

    reset()
  } catch (err: any) {
    console.log(err.response.data)
  }
}

export const resolverOptions: IResolver = {
  resolver: yupResolver(LoginSchema),
  mode: 'onChange',
}
