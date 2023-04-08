import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tokenDate: Date.now(),
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    changeTokenState: (state, action) => {
      state.tokenDate = action.payload
    },
  },
})

export const { changeTokenState } = tokenSlice.actions
export default tokenSlice.reducer
