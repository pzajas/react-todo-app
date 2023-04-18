import { TodoType, TodosType } from '@typescript/types'
import { useSelector } from 'react-redux'

export const getTodos = (): TodosType => {
  const todos = useSelector<{ todo: TodoType[] }, TodoType[]>(
    (state) => state.todo
  )
  return todos
}
