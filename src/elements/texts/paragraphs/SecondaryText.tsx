import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  text-align: center;
`

export const SecondaryText = ({ text }: any): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>
}
