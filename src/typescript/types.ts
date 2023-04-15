import { type yupResolver } from '@hookform/resolvers/yup'

export type FormProps = {
  onSubmit: (data: FormData) => Promise<void>
  inputs: InputArrayType[]
  buttonText?: string
}

export type InputArrayType = {
  name: string
  placeholder: string
  type: 'text' | 'email' | 'password'
  label?: string
  required?: boolean
  validation?: RegistrationOptions
}

export type FormData = Record<string, string>

// INTERFACES

export interface IFormData {
  email: string
  password: string
}

export interface IRegisterData {
  email: string
  password: string
}

export interface IResolver {
  resolver: ReturnType<typeof yupResolver>
  mode: 'onChange'
}

// TYPES

export type IDispatch = (arg: { payload: number; type: string }) => void
export type IReset = () => void
