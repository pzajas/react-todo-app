import PrimaryText from '../../elements/PrimaryText'
import SecondaryText from '../../elements/SecondaryText'
import styled from 'styled-components'

const StyledLoginNavbar = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-items: center;

  font-weight: bold;

  div {
    width: 90%;
  }
`

const LoginNavbar = (): any => {
  return (
    <StyledLoginNavbar>
      <PrimaryText text="WELCOME BACK" />
      <div>
        <SecondaryText text="HELLO! I'M GLAD YOU ARE HERE AGAIN. JUST SIGN IN AND HAVE MUCH FUN!" />
      </div>
    </StyledLoginNavbar>
  )
}

export default LoginNavbar
