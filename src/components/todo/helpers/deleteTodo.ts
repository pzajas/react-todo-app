import { HTTP_URLS } from '@libs/http'
import { deleteTodo } from '@redux/features/todoSlice'
import { getToken } from './getToken'

import { type Dispatch } from '@reduxjs/toolkit'

import axios from 'axios'

export const onDeleteTodo = async (
  id: number,
  dispatch: Dispatch
): Promise<void> => {
  const token = getToken()

  try {
    await axios.delete(`${HTTP_URLS.TODOS}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    dispatch(deleteTodo({ id }))
  } catch (error) {
    console.error(error)
  }
}
