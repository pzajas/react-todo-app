import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isValidToken: false,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    changeTokenState: (state, action) => {
      state.isValidToken = action.payload
    },
  },
})

export const { changeTokenState } = tokenSlice.actions
export default tokenSlice.reducer
