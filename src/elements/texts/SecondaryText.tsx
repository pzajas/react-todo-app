import styled from 'styled-components'
interface IPrimaryText {
  text: string
}

export const SecondaryText = ({ text }: IPrimaryText): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>
}

const StyledParagraph = styled.p`
  font-weight: normal;
  text-align: center;

  font-size: ${({ theme }) => theme.fonts.small};
`
