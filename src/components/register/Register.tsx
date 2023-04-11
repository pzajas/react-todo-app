import { AuthenticationFooter } from './footer/AuthenticationFooter'
import { AuthenticationHeader } from './header/AuthenticationHeader'
import { LoginForm } from './body/form/LoginForm'
import { SecondaryLinkContainer } from './body/SecondaryLinkContainer'

import DividerWithText from '../login/body/DividerWithText'

export const Register = (): JSX.Element => {
  return (
    <div>
      <AuthenticationHeader />
      <LoginForm />
      <DividerWithText />
      <SecondaryLinkContainer />

      <AuthenticationFooter />
    </div>
  )
}
