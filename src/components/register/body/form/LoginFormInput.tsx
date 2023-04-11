/* eslint-disable react/prop-types */
import { ErrorMessage } from '@hookform/error-message'
import styled from 'styled-components'

interface Props {
  name: string
  placeholder: string
  autoComplete: string
  register: any
  errors: any
}

export const LoginFormInput: React.FC<Props> = ({
  name,
  placeholder,
  autoComplete,
  register,
  errors,
}): JSX.Element => {
  return (
    <div style={{ marginBottom: '2.2rem' }}>
      <input
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {errors[name] != null ? (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      ) : (
        <StyledErrorPlaceholder>
          {name === 'username' ? 'Username Error' : 'Password Error'}
        </StyledErrorPlaceholder>
      )}
    </div>
  )
}

// STYLES

const StyledError = styled.p`
  margin-top: 0.2rem;
  margin-bottom: 1.9rem;
  color: red;
  font-size: 0.8rem;
`

const StyledErrorPlaceholder = styled.div`
  margin-top: 0.2rem;
  font-size: 0.8rem;
  opacity: 0;
`
