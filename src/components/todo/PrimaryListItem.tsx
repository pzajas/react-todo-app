import { submitEdit } from './helpers/submitEdit'
import { useState } from 'react'
import { InputArrayType, FormData } from '@typescript/types'
import { PrimaryForm } from './PrimaryForm'

export const PrimaryListItem = ({ todo, options }: any): JSX.Element => {
  const { id, value } = todo

  const [onDeleteTodo, onCompleteTodo, dispatch] = options
  const [editing, setEditing] = useState(false)

  const inputs: InputArrayType = [
    { type: 'text', name: 'edit', placeholder: 'edit me' },
  ]

  const handleSubmitEdit = async (data: FormData): Promise<void> => {
    await submitEdit({ id, text: data.edit, dispatch })

    setEditing(false)
  }

  return (
    <div>
      <div
        onClick={() => {
          setEditing(true)
        }}
      >
        {editing ? (
          <PrimaryForm onSubmit={handleSubmitEdit} inputs={inputs} />
        ) : (
          <div>{value}</div>
        )}
      </div>

      <button onClick={() => onCompleteTodo(todo, dispatch)}>COMPLETE</button>
      <button onClick={() => onDeleteTodo(id, dispatch)}>DELETE</button>
    </div>
  )
}
