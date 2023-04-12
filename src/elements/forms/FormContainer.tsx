import { ButtonContainer } from './ButtonContainer'
import { FormInputs } from './FormInputs'
import { FormOptions } from './FormOptions'
import { LoginPassword } from '@assets/icons/LoginPassword'
import { LoginUser } from '@assets/icons/LoginUser'
import { RegisterSubmit } from '@utils/RegisterSubmit'
import { onSubmit, resolverOptions } from '@utils/onSubmit'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { type IFormData } from '@typescript/types/types'

import styled from 'styled-components'

export const FormContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const path = window.location.pathname

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>(resolverOptions)

  const onSubmitHandler = async (data: IFormData): Promise<void> => {
    path === '/login'
      ? await onSubmit(data, reset, dispatch)
      : await RegisterSubmit(data, reset)
  }

  const formInputs = [
    { name: 'email', placeholder: 'email', icon: <LoginUser /> },
    { name: 'password', placeholder: 'password', icon: <LoginPassword /> },
  ]

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        {formInputs.map((input) => (
          <FormInputs
            key={input.name}
            autoComplete="off"
            register={register}
            errors={errors}
            {...input}
          />
        ))}
        <FormOptions />
        <ButtonContainer onSubmit={onSubmit} />
      </StyledForm>
    </div>
  )
}

const StyledForm = styled.form`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 4rem;
  position: relative;

  input {
    padding: 0;

    outline: none;
    border: none;
    width: 100%;
    height: 2.8rem;

    background-color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.small};
    border-bottom: ${({ theme }) => theme.borders.secondary};
  }
`
