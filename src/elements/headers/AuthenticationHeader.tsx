import { AUTH } from '@libs/dictionary'
import { PrimaryText } from '@elements/texts/PrimaryText'
import { SecondaryText } from '@elements/texts/SecondaryText'

export const AuthenticationHeader = (): JSX.Element => {
  const path = window.location.pathname

  const loginHeader = AUTH.LOGIN_HEADER
  const loginText = AUTH.LOGIN_PARAGR

  const registerHeader = AUTH.REGISTER_HEADER
  const registerText = AUTH.REGISTER_PARAGR

  return (
    <>
      <PrimaryText text={path === '/login' ? loginHeader : registerHeader} />
      <SecondaryText text={path === '/login' ? loginText : registerText} />
    </>
  )
}
