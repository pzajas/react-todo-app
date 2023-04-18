import { HTTP_URLS } from '@libs/http'
import { addTodo } from '@redux/features/todoSlice'
import { getCookiesToken } from './getCookiesToken'

import { type Dispatch } from '@reduxjs/toolkit'

import axios, { type AxiosResponse } from 'axios'

type TodoData = {
  id: number
  value: string
  completed: boolean
}

type FormData = Record<string, string>

export const submitTodo = async (
  data: FormData,
  dispatch: Dispatch
): Promise<void> => {
  const token = getCookiesToken()

  const response: AxiosResponse<{ todo: TodoData }> = await axios.post(
    HTTP_URLS.TODOS,
    {
      value: data.text,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  )
  const todo = response.data.todo
  dispatch(addTodo(todo))
}
