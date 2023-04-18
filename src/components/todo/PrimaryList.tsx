import { PrimaryListItem } from './PrimaryListItem'
import { onCompleteTodo } from './helpers/completeTodo'
import { onDeleteTodo } from './helpers/deleteTodo'
import { useDispatch } from 'react-redux'

import { TodoType, type TodosType } from '@typescript/types'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'

type Options = {
  onDeleteTodo: (id: number, dispatch: Dispatch<AnyAction>) => Promise<void>
  onCompleteTodo: (
    options: TodoType,
    dispatch: Dispatch<AnyAction>
  ) => Promise<void>
  dispatch: Dispatch<AnyAction>
}

export const PrimaryList = ({ todos }: { todos: TodosType }): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <div>
      {todos?.map((todo) => {
        const { id, value, completed } = todo
        const options: any = [onDeleteTodo, onCompleteTodo, dispatch]

        return (
          <div key={id}>
            <PrimaryListItem todo={todo} options={options} />
          </div>
        )
      })}
    </div>
  )
}
