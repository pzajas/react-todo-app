import { AUTH } from '@libs/dictionary'
import { SecondaryLink } from '@elements/links/SecondaryLink'
import { SecondaryText } from '@elements/texts/SecondaryText'

import styled from 'styled-components'

const loginFooter = AUTH.LOGIN_FOOTER
const loginSpan = AUTH.LOGIN_SPAN

const registerFooter = AUTH.REGISTER_FOOTER
const registerSpan = AUTH.REGISTER_SPAN

export const AuthenticationFooter = (): JSX.Element => {
  const path = window.location.pathname

  return (
    <StyledAuthFooter>
      <SecondaryText text={path === '/login' ? loginFooter : registerFooter} />
      <SecondaryLink
        text={path === '/login' ? loginSpan : registerSpan}
        path={path === '/login' ? '/register' : '/login'}
      />
    </StyledAuthFooter>
  )
}

const StyledAuthFooter = styled.div`
  display: flex;
  justify-content: center;
`
