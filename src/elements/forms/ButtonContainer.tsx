import { LoginClear } from '@assets/icons/LoginClear'
import { LoginIcon } from '@assets/icons/LoginIcon'
import { PrimaryButton } from '@elements/buttons/PrimaryButton'

import styled from 'styled-components'

export const ButtonContainer = ({ onSubmitHandler }: any): JSX.Element => {
  const path = window.location.pathname

  return (
    <StyledButtonContainer>
      <PrimaryButton
        type="submit"
        text={path === '/login' ? 'LOGIN' : 'CREATE'}
        icon={<LoginIcon />}
        onClick={onSubmitHandler}
      />

      <PrimaryButton type="button" text="CLEAR" icon={<LoginClear />} />
    </StyledButtonContainer>
  )
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 4.4rem;
`
