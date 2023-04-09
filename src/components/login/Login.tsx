import { LoginForm } from './LoginForm'
import { SecondaryLinkContainer } from './SecondaryLinkContainer'
import { SecondaryTextContainer } from './SecondaryTextContainer'
import DividerWithText from './DividerWithText'
import LoginNavbar from '../nav/LoginNavbar'

import styled from 'styled-components'

const StyledContainer = styled(SecondaryTextContainer)`
  justify-content: center;
  gap: 0.1rem;
  margin-bottom: 0;

  span {
    color: #01ff8a;
  }
`

const Login = (): any => {
  return (
    <div>
      <LoginNavbar />
      <LoginForm />
      <DividerWithText text="OR CONNECT WITH" />
      <SecondaryLinkContainer />
      <StyledContainer>
        NOT A MEMBER?<span>REGISTER NOW</span>
      </StyledContainer>
    </div>
  )
}

export default Login
