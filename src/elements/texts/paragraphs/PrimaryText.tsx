import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #01ff8a;
  margin-bottom: 4.1rem;
  text-align: center;
`

interface IPrimaryText {
  text: string
}

export const PrimaryText = ({ text }: IPrimaryText): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>
}
