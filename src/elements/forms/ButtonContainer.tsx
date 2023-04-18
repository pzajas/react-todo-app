import { LoginClear } from '@assets/icons/LoginClear'
import { LoginIcon } from '@assets/icons/LoginIcon'
import { PrimaryButton } from '@elements/buttons/PrimaryButton'

import styled from 'styled-components'

export const ButtonContainer = ({ onSubmitHandler }: any): JSX.Element => {
  const path = window.location.pathname

  return (
    <StyledButtonContainer>
      <StyledButton
        type="submit"
        text={path === '/login' ? 'LOGIN' : 'CREATE'}
        icon={<LoginIcon />}
        onClick={onSubmitHandler}
      />

      <StyledButton type="button" text="CLEAR" icon={<LoginClear />} />
    </StyledButtonContainer>
  )
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 4.4rem;
`

const StyledButton = styled(PrimaryButton)`
  width: 8.3rem;
  height: 2.7rem;
  padding: 0rem 1.7rem 0rem 1.7rem;
  border-radius: 0.2rem;

  align-items: center;
  text-align: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.secondary};
  font-size: ${({ theme }) => theme.fonts.small};
`
