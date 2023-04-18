import { type MouseEventHandler } from 'react'
import { type yupResolver } from '@hookform/resolvers/yup'
import { Dispatch } from '@reduxjs/toolkit'

// FORM

export type FormProps = {
  onSubmit: (data: FormData) => Promise<void>
  inputs: InputArrayType
  buttonText?: string
}

export type InputArrayType = {
  name: string
  type: 'text' | 'number' | 'checkbox'
  placeholder: string
  label?: string
  required?: boolean
}[]

export type InputType = {
  name: string
  type: 'text' | 'number' | 'checkbox'
  placeholder: string
  label?: string
  required?: boolean
}

export type InputData = {
  name: string
  type: string

  placeholder?: string
  value?: string | number | boolean
}[]

// export const input: InputType = {
//   name: 'myInput',
//   type: 'text',
//   placeholder: 'Enter some text',
//   label: 'My input',
//   required: true,
// }

export type FormData = {
  edit: string
}
// TODO

export type TodoType = {
  id: number
  value: string
  completed: boolean
}

export type TodosType = TodoType[]

export type TodoValue = {
  value: string
}

// BUTTON

export type ButtonType = {
  text?: string
  icon?: JSX.Element
  type?: 'submit' | 'button' | 'reset'
  onClick?: MouseEventHandler<void>
  className?: string
}

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
