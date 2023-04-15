import { PrimaryForm as Form } from './PrimaryForm'

import { handleSubmit } from './onSubmitFunction'
import { useDispatch } from 'react-redux'

const Todos = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <div>
      <Form
        onSubmit={async (data) => {
          await handleSubmit(data, dispatch)
        }}
        inputName="text"
      />
    </div>
  )
}

export default Todos
