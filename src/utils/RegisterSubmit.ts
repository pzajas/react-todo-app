import { AuthenticationSchema } from '../validation/schemas/authenticationSchema'
import { HTTP_URLS } from '@libs/http'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  type IRegisterData,
  type IReset,
  type IResolver,
} from '@typescript/types/types'

import axios from 'axios'

export const RegisterSubmit = async (
  data: IRegisterData,
  reset: IReset
): Promise<void> => {
  try {
    await axios.post(HTTP_URLS.REGISTER, {
      email: data.email,
      password: data.password,
    })

    reset()
  } catch (err: any) {
    console.log(err.response.data)
  }
}

export const resolverOptions: IResolver = {
  resolver: yupResolver(AuthenticationSchema),
  mode: 'onChange',
}
