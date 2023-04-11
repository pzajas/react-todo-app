import { type yupResolver } from '@hookform/resolvers/yup'

// INTERFACES

export interface IFormData {
  username: string
  password: string
}

export interface IResolver {
  resolver: ReturnType<typeof yupResolver>
  mode: 'onChange'
}

// TYPES

export type IDispatch = (arg: { payload: number; type: string }) => void
export type IReset = () => void
