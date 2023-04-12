import { AuthenticationFooter } from '@elements/footers/AuthenticationFooter'
import { AuthenticationHeader } from '@elements/headers/AuthenticationHeader'
import { DividerWithText } from '@elements/dividers/DividerWithText'
import { FormContainer } from '@elements/forms/FormContainer'
import { SecondaryLinkContainer } from '@elements/links/SecondaryLinkContainer'

export const Login = (): JSX.Element => {
  return (
    <div>
      <AuthenticationHeader />

      <FormContainer />

      <DividerWithText />
      <SecondaryLinkContainer />

      <AuthenticationFooter />
    </div>
  )
}
