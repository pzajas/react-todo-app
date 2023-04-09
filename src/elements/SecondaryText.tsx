import styled from 'styled-components'

const StyledParagraph = styled.p`
  margin: 0;
  text-align: center;

  font-weight: normal;
  font-size: 0.8rem;
`

const SecondaryText = (children: any): any => {
  return <StyledParagraph>{children.text}</StyledParagraph>
}

export default SecondaryText
