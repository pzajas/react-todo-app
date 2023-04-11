import { PrimaryText } from '../../../elements/texts/paragraphs/PrimaryText'
import { SecondaryText } from '../../../elements/texts/paragraphs/SecondaryText'

export const AuthenticationHeader = (): JSX.Element => {
  return (
    <>
      <PrimaryText text="WELCOME BACK" />
      <SecondaryText text="HELLO! I'M GLAD YOU ARE HERE AGAIN. JUST SIGN IN AND HAVE MUCH FUN!" />
    </>
  )
}
