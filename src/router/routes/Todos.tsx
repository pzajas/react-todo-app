import { HTTP_URLS } from '@libs/http'
import { addTodo, deleteTodo, setTodos } from '../../redux/features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Cookies from 'universal-cookie'
import axios, { type AxiosResponse } from 'axios'
import styled from 'styled-components'

interface ITodo {
  id: number
  value: string
  completed: boolean
  userId: number
}

const Todos = (): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<{ text: string }>()
  const cookies = new Cookies()
  const token: string = cookies.get('token')
  const dispatch = useDispatch()
  const todos = useSelector<{ todo: ITodo[] }, ITodo[]>((state) => state.todo)

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        const response: AxiosResponse<{ todos: ITodo[] }> = await axios.get(
          HTTP_URLS.TODOS,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        )
        const fetchedTodos = response.data.todos
        dispatch(setTodos({ todos: fetchedTodos }))
      } catch (error) {
        console.log(error)
      }
    }
    fetchTodos().catch(console.error)
  }, [dispatch, token])

  const onSubmitTodo = async (data: { text: string }): Promise<void> => {
    try {
      const response: AxiosResponse<{ todo: ITodo }> = await axios.post(
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
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  const onDeleteTodo = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${HTTP_URLS.TODOS}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      dispatch(deleteTodo({ id }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitTodo)}>
        <input type="text" {...register('text')} />
        <button type="submit">Submit</button>
      </form>
      <StyledList>
        {todos?.map((todo: ITodo) => (
          <ListItem key={todo.id}>
            <li>{todo.value}</li>
            <button
              onClick={async () => {
                await onDeleteTodo(todo.id)
              }}
            >
              DEL
            </button>
          </ListItem>
        ))}
      </StyledList>
    </>
  )
}

export default Todos

const StyledList = styled.div`
  background-color: #202020;
  padding: 1rem;
  line-height: 1.5;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: #252525;

  li {
    padding: 0.5rem;
  }

  button {
    background-color: red;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
`
