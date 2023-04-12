/* eslint-disable react/prop-types */
import { ErrorMessage } from '@hookform/error-message'
import styled from 'styled-components'

interface Props {
  name: string
  placeholder: string
  autoComplete: string
  register: any
  errors: any
  icon: JSX.Element
}

export const LoginFormInput: React.FC<Props> = ({
  name,
  placeholder,
  autoComplete,
  register,
  errors,
  icon,
}: any): JSX.Element => {
  return (
    <div style={{ marginBottom: '1.8rem' }}>
      <StyledInputContainer>
        <input
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <div>{icon}</div>
      </StyledInputContainer>

      {errors[name] != null ? (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      ) : (
        <StyledErrorPlaceholder>
          {name === 'email' ? 'Email Error' : 'Password Error'}
        </StyledErrorPlaceholder>
      )}
    </div>
  )
}

// STYLES

const StyledInputContainer = styled.div`
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
  margin-top: 0.2rem;
  margin-bottom: 1.8rem;

  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.small};
`

const StyledErrorPlaceholder = styled.div`
  margin-top: 0.2rem;
  opacity: 0;

  font-size: ${({ theme }) => theme.fonts.small};
`
