import styled from 'styled-components'
interface IPrimaryText {
  text: string
}

export const PrimaryText = ({ text }: IPrimaryText): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>
}

const StyledParagraph = styled.p`
  margin-bottom: 3rem;

  font-weight: bold;
  text-align: center;

  font-size: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.secondary};
`
