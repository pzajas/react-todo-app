import { RegisterButtonContainer } from './RegisterButtonContainer'
import { RegisterFormInput } from './RegisterFormInput'
import { RegisterOptions } from './RegisterOptions'
import {
  RegisterSubmit,
  resolverOptions,
} from '../../../../utils/RegisterSubmit'
import { useForm } from 'react-hook-form'

import { type IRegisterData } from '../../../../typescript/types/types'

import { LoginPassword } from '../../../../assets/icons/LoginPassword'
import { RegisterUser } from '../../../../assets/icons/RegisterUser'
import styled from 'styled-components'

export const RegisterForm: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterData>(resolverOptions)

  const onSubmitHandler = async (formData: IRegisterData): Promise<void> => {
    await RegisterSubmit(formData, reset)
  }

  const formInputs = [
    { name: 'email', placeholder: 'email', icon: <RegisterUser /> },
    { name: 'password', placeholder: 'password', icon: <LoginPassword /> },
  ]

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        {formInputs.map((input) => (
          <RegisterFormInput
            key={input.name}
            name={input.name}
            placeholder={input.placeholder}
            autoComplete="off"
            register={register}
            errors={errors}
            icon={input.icon}
          />
        ))}
        <RegisterOptions />
        <RegisterButtonContainer onSubmit={RegisterSubmit} />
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
