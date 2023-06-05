import { useForm } from 'react-hook-form'

import { type FormData, type FormProps } from '@typescript/types'
import styled from 'styled-components'

export const PrimaryForm = ({
  onSubmit,
  inputs,
  buttonText = '+',
  className,
}: FormProps): JSX.Element => {
  const { reset, handleSubmit, register } = useForm<FormData>()
  const { name } = inputs

  const onSubmitTodo = async (data: FormData): Promise<void> => {
    try {
      await onSubmit(data)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledPrimaryForm onSubmit={handleSubmit(onSubmitTodo)}>
      {inputs?.map(({ type, name, placeholder }) => (
        <StyledInputContainer>
          <input
            className={className}
            key={name}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            autoFocus
            {...register(name)}
          />

          <button type="submit">{buttonText}</button>
        </StyledInputContainer>
      ))}
    </StyledPrimaryForm>
  )
}

const StyledPrimaryForm = styled.form`
  /* display: flex;
  justify-content: space-between; */
`

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  * {
    font-size: 1rem;
    border: none;
    padding: 0.3rem;
  }

  input {
    width: 100%;
    outline: none;
    padding: 1rem;
  }

  button {
    cursor: pointer;
    height: 100%;
    padding: 1rem;
  }
`
