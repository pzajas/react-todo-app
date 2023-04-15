import { HTTP_URLS } from '@libs/http'
import { addTodo } from '../../redux/features/todoSlice'
import { type useDispatch } from 'react-redux'

import axios, { type AxiosResponse } from 'axios'

import Cookies from 'universal-cookie'

type TodoData = {
  id: number
  value: string
  completed: boolean
}

type DispatchType = ReturnType<typeof useDispatch>

type FormData = Record<string, string>

export const handleSubmit = async (
  data: FormData,
  dispatch: DispatchType
): Promise<void> => {
  const cookies = new Cookies()

  const token: string = cookies.get('token')

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
