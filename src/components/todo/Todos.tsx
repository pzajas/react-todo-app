import { PrimaryForm as Form } from './PrimaryForm'
import { handleSubmit } from './onSubmitFunction'
import { useDispatch } from 'react-redux'

import { type InputArrayType } from '@typescript/types'

const Todos = (): JSX.Element => {
  const dispatch = useDispatch()

  const inputsArray: InputArrayType[] = [
    { type: 'text', name: 'text', placeholder: 'Add a todo' },
  ]

  return (
    <div>
      <Form
        onSubmit={async (data) => {
          await handleSubmit(data, dispatch)
        }}
        inputs={inputsArray}
      />
    </div>
  )
}

export default Todos
