import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 2rem;
  color: #01ff8a;

  margin: 0;
  margin-bottom: 4.1rem;
  text-align: center;
`

const SecondaryText = ({ text }: { text: string }): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>
}

export default SecondaryText
