import { HTTP_URLS } from '@libs/http'
import { getToken } from './getToken'
import { updateTodo } from '@redux/features/todoSlice'

import { type Dispatch, type AnyAction } from '@reduxjs/toolkit'

import axios from 'axios'

type Props = {
  id: number
  text: string
  dispatch: Dispatch<AnyAction>
}

export const submitEdit = async ({
  id,
  text,
  dispatch,
}: Props): Promise<void> => {
  const token = getToken()

  if (text.length > 4) {
    dispatch(updateTodo({ id, text }))
  }

  await axios.patch(
    `${HTTP_URLS.TODOS}/${id}`,
    { value: text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  )
}
