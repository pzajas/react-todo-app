import { LoginButtonContainer } from './LoginButtonContainer'
import { LoginFormInput } from './LoginFormInput'
import { LoginOptions } from './LoginOptions'
import { LoginUser } from '../../../../assets/icons/LoginUser'
import { onSubmit, resolverOptions } from '../../../../utils/onSubmit'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { type IFormData } from '../../../../typescript/types/types'

import { LoginPassword } from '../../../../assets/icons/LoginPassword'
import styled from 'styled-components'

export const LoginForm: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>(resolverOptions)

  const onSubmitHandler = async (formData: IFormData): Promise<void> => {
    await onSubmit(formData, reset, dispatch)
  }

  const formInputs = [
    { name: 'email', placeholder: 'email', icon: <LoginUser /> },
    { name: 'password', placeholder: 'password', icon: <LoginPassword /> },
  ]

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        {formInputs.map((input) => (
          <LoginFormInput
            key={input.name}
            name={input.name}
            placeholder={input.placeholder}
            autoComplete="off"
            register={register}
            errors={errors}
            icon={input.icon}
          />
        ))}
        <LoginOptions />
        <LoginButtonContainer onSubmit={onSubmit} />
      </StyledForm>
    </div>
  )
}

// STYLES

const StyledForm = styled.form`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 4rem;
  position: relative;
  input {
    padding: 0;
    background-color: #181818;
    font-size: 0.8rem;
    font-family: Montserrat, system-ui, Avenir, Helvetica, Arial, sans-serif;
    outline: none;
    border: none;
    border-bottom: 0.1rem solid #01ff8a;
    width: 100%;
    height: 2.8rem;
  }
`
