import { useForm } from 'react-hook-form'

import { type FormData, type FormProps } from '@typescript/types'

export const PrimaryForm = ({
  onSubmit,
  inputs,
  buttonText = 'Submit',
}: FormProps): JSX.Element => {
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
      {inputs?.map(({ type, name, placeholder }) => (
        <input
          key={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  )
}
