import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type SubmitHandler } from 'react-hook-form'

type FormData = Record<string, string>

type FormMethods = {
  register: (name: string) => any
  handleSubmit: (onSubmit: SubmitHandler<FormData>) => (data: FormData) => void
}

const initialState: FormMethods = {
  register: () => {},
  handleSubmit: () => () => {},
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormMethods: (state, action: PayloadAction<FormMethods>) => {
      state.register = action.payload.register
      state.handleSubmit = action.payload.handleSubmit
    },
  },
})

export const { setFormMethods } = formSlice.actions
export default formSlice.reducer
