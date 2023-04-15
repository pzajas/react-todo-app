import { HTTP_URLS } from '@libs/http'
import {
  addTodo,
  completeTodo,
  deleteTodo,
  setTodos,
  updateTodo,
} from '../../redux/features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
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

type EditType = number | null

const Todos = (): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<{ text: string }>()
  const cookies = new Cookies()
  const token: string = cookies.get('token')
  const dispatch = useDispatch()
  const todos = useSelector<{ todo: ITodo[] }, ITodo[]>((state) => state.todo)

  const [edit, setEdit] = useState<EditType>(null)

  const MIN_TEXT_LENGTH = 4

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
  // jkdhksdhfsdfhksdfhsdhfkjdshfkjsdhksdjfhjksdhfkjdshjsdhfjksdhkjsdhfkjdshfkdsfhkjsdhfkjsdhfk
  const onCompleteTodo = async (
    id: number,
    value: string,
    completed: boolean
  ): Promise<any> => {
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

  // jkdhksdhfsdfhksdfhsdhfkjdshfkjsdhksdjfhjksdhfkjdshjsdhfjksdhkjsdhfkjdshfkdsfhkjsdhfkjsdhfk

  const handleEdit = (id: number): void => {
    setEdit(id)
  }

  const TodoForm = ({ todo }: any): any => {
    const { register, handleSubmit, watch } = useForm()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const text = watch('edit')

    const id: number = todo.id

    const onSubmit = async (): Promise<any> => {
      setIsSubmitting(true)

      if (text.length > MIN_TEXT_LENGTH) {
        dispatch(updateTodo({ id, text }))
      }

      await axios.patch(
        `${HTTP_URLS.TODOS}/${id}`,
        {
          value: text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )

      setIsSubmitting(false)
      setEdit(null)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('edit')} />
        <button type="submit">Save</button>
        {isSubmitting && <div>Submitting...</div>}
      </form>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitTodo)}>
        <input type="text" {...register('text')} />
        <button type="submit">Submit</button>
      </form>
      <StyledList>
        {todos?.map((todo: ITodo) => (
          <ListItemContainer key={todo.id}>
            <li>
              <div
                onClick={() => {
                  handleEdit(todo.id)
                }}
              >
                {edit === todo.id ? (
                  <TodoForm todo={todo} />
                ) : (
                  <StyledDiv
                    data-todo={todo.completed ? 'completed' : 'not-completed'}
                  >
                    {todo.value}
                  </StyledDiv>
                )}
              </div>

              <div>
                <button
                  onClick={async () => {
                    await onDeleteTodo(todo.id)
                  }}
                >
                  DEL
                </button>
                <button
                  onClick={async () => {
                    await onCompleteTodo(todo.id, todo.value, todo.completed)
                  }}
                >
                  COMPLE
                </button>
              </div>
            </li>
          </ListItemContainer>
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

const ListItemContainer = styled.div`
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

type Props = {
  'data-todo': string
}

const StyledDiv = styled.div<Props>`
  color: ${(props) => (props['data-todo'] === 'completed' ? 'grey' : 'w')};
  text-decoration: ${(props) =>
    props['data-todo'] === 'completed' ? 'line-through' : 'none'};
`
