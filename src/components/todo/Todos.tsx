import { PrimaryForm } from './PrimaryForm'
import { submitTodo } from './helpers/submitTodo'
import { useDispatch } from 'react-redux'

import { FormData, InputType } from '@typescript/types'
import { PrimaryList } from './PrimaryList'
import { getTodos } from './helpers/getTodos'

export const Todos = (): JSX.Element => {
  const todos = getTodos()
  const dispatch = useDispatch()

  const handleSubmitTodo = async (data: FormData) => {
    await submitTodo(data, dispatch)
  }

  const inputsArray: InputType[] = [
    { type: 'text', name: 'text', placeholder: 'Add a todo' },
  ]

  return (
    <div>
      <PrimaryForm onSubmit={handleSubmitTodo} inputs={inputsArray} />
      <PrimaryList todos={todos} />
    </div>
  )
}
