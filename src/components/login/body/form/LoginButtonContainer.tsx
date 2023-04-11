import { LoginClear } from '../../../../assets/icons/LoginClear'
import { LoginIcon } from '../../../../assets/icons/LoginIcon'
import { PrimaryButton } from '../../../../elements/buttons/PrimaryButton'
import styled from 'styled-components'

export const LoginButtonContainer = ({ onSubmit }: any): JSX.Element => {
  return (
    <StyledButtonContainer>
      <PrimaryButton
        type="submit"
        text="LOGIN"
        icon={<LoginIcon />}
        onClick={onSubmit}
      />

      <PrimaryButton text="CLEAR" icon={<LoginClear />} />
    </StyledButtonContainer>
  )
}

// STYLES
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3.4rem;
`
