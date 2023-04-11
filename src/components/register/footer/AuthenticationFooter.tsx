import { SecondaryLink } from '../../../elements/links/SecondaryLink'
import { SecondaryText } from '../../../elements/texts/paragraphs/SecondaryText'
import styled from 'styled-components'

const StyledAuthFooter = styled.div`
  display: flex;
  justify-content: center;
`

export const AuthenticationFooter = (): JSX.Element => {
  return (
    <StyledAuthFooter>
      <SecondaryText text="ALREADY A MEMBER?" />
      <SecondaryLink text="LOGIN HERE!" path="/login" />
    </StyledAuthFooter>
  )
}
