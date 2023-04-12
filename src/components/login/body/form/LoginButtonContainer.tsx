import { LoginClear } from '../../../../assets/icons/LoginClear'
import { LoginIcon } from '../../../../assets/icons/LoginIcon'
import { PrimaryButton } from '../../../../elements/buttons/PrimaryButton'

import styled from 'styled-components'

export const LoginButtonContainer = ({
  onSubmitHandler,
  handleReset,
}: any): JSX.Element => {
  return (
    <StyledButtonContainer>
      <PrimaryButton
        type="submit"
        text="LOGIN"
        icon={<LoginIcon />}
        onClick={onSubmitHandler}
      />

      <PrimaryButton
        type="button"
        text="CLEAR"
        icon={<LoginClear />}
        onMouseDown={handleReset}
      />
    </StyledButtonContainer>
  )
}

// STYLES

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 4.4rem;
`
