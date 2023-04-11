import { AuthenticationFooter } from './footer/AuthenticationFooter'
import { AuthenticationHeader } from './header/AuthenticationHeader'
import { RegisterForm } from './body/form/RegisterForm'
import { SecondaryLinkContainer } from './body/SecondaryLinkContainer'

import DividerWithText from '../login/body/DividerWithText'

export const Register = (): JSX.Element => {
  return (
    <div>
      <AuthenticationHeader />
      <RegisterForm />
      <DividerWithText />
      <SecondaryLinkContainer />

      <AuthenticationFooter />
    </div>
  )
}
