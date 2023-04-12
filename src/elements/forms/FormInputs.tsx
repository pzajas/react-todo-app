/* eslint-disable react/prop-types */
import { ErrorMessage } from '@hookform/error-message'

import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  placeholder: string
  autoComplete: string
  register: any
  errors: any
  icon: JSX.Element
}

export const FormInputs: React.FC<Props> = ({
  name,
  placeholder,
  autoComplete,
  register,
  errors,
  icon,
}) => {
  return (
    <Wrapper>
      <InputContainer>
        <input
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <div>{icon}</div>
      </InputContainer>

      {errors[name] != null ? (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      ) : (
        <ErrorPlaceholder>
          {name === 'email' ? 'Email Error' : 'Password Error'}
        </ErrorPlaceholder>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 1.8rem;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    height: 100%;
    padding: 0.6rem 0rem;

    border-bottom: ${({ theme }) => theme.borders.secondary};
  }
`

const StyledError = styled.p`
  margin: 0.2rem 0 1.8rem;

  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.small};
`

const ErrorPlaceholder = styled.div`
  margin-top: 0.2rem;
  opacity: 0;

  font-size: ${({ theme }) => theme.fonts.small};
`
