import styled from 'styled-components'

export const SecondaryText = ({ text }: any): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>
}

const StyledParagraph = styled.p`
  font-weight: normal;
  text-align: center;

  font-size: ${({ theme }) => theme.fonts.small};
`
