import { LoginForm } from './components/forms/LoginForm'
import LoginNavbar from './components/nav/LoginNavbar'
import RootLayout from './router/layouts/RootLayout'
import styled from 'styled-components'

const StyledApplicationContainer = styled.div`
  padding: 5.6rem;
`

const App = () => {
  return (
    <StyledApplicationContainer>
      <LoginNavbar />
      <LoginForm />
    </StyledApplicationContainer>
  )
}

export default App
