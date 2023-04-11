import { SecondaryText } from '../../../../elements/texts/paragraphs/SecondaryText'
import { SecondaryTextContainer } from '../SecondaryTextContainer'

export const LoginOptions = (): JSX.Element => {
  return (
    <SecondaryTextContainer>
      <SecondaryText text="REMEMBER ME?" />
      <SecondaryText text="FORGOT PASS?" />
    </SecondaryTextContainer>
  )
}
