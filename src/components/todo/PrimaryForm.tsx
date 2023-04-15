import { useForm } from 'react-hook-form'

type FormData = Record<string, string>

type AddTodoFormProps = {
  onSubmit: (data: FormData) => Promise<void>
  inputName: string
  buttonText?: string
}

export const PrimaryForm = ({
  onSubmit,
  inputName,
  buttonText = 'Submit',
}: AddTodoFormProps): JSX.Element => {
  const { reset, handleSubmit, register } = useForm<FormData>()

  const onSubmitTodo = async (data: FormData): Promise<void> => {
    try {
      await onSubmit(data)

      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitTodo)}>
      <input type="text" {...register(inputName)} />
      <button type="submit">{buttonText}</button>
    </form>
  )
}
