import { HTTP_URLS } from '@libs/http'
import { completeTodo } from '@redux/features/todoSlice'
import { getToken } from './getToken'

import { type Dispatch } from '@reduxjs/toolkit'
import { type TodoType } from '@typescript/types'

import axios from 'axios'

export const onCompleteTodo = async (
  options: TodoType,
  dispatch: Dispatch
): Promise<void> => {
  const token = getToken()
  const { id, value, completed } = options

  try {
    await axios.patch(
      `${HTTP_URLS.TODOS}/${id}`,
      {
        value,
        completed: !completed,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    )

    dispatch(completeTodo({ id, value, completed }))
  } catch (error) {
    console.log(error)
  }
}
