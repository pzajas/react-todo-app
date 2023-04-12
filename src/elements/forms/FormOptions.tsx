import { SecondaryText } from '@elements/texts/SecondaryText'
import { SecondaryTextContainer } from '@elements/texts/SecondaryTextContainer'

export const FormOptions = (): JSX.Element => {
  return (
    <SecondaryTextContainer>
      <SecondaryText text="REMEMBER ME?" />
      <SecondaryText text="FORGOT PASS?" />
    </SecondaryTextContainer>
  )
}
