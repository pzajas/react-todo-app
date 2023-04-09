import styled from 'styled-components'

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.3rem;
  margin: 2.4rem 0rem 3rem 0rem;

  div {
    width: 4.3rem;
    height: 4.3rem;

    background-color: #252525;
  }
`

export const SecondaryLinkContainer = (): any => {
  const linksArray = [<div />, <div />, <div />, <div />]

  return (
    <div>
      <StyledLinksContainer>
        {linksArray.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </StyledLinksContainer>
    </div>
  )
}
