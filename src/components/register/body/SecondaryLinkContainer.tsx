import { Apple, Google, Linkedin, Twitter } from '@styled-icons/bootstrap'

import styled from 'styled-components'

interface IProps {
  icon: JSX.Element
  key: string
}

const linksArray = [
  { icon: <Google />, key: 'google' },
  { icon: <Twitter />, key: 'twitter' },
  { icon: <Apple />, key: 'apple' },
  { icon: <Linkedin />, key: 'linkedin' },
]

export const SecondaryLinkContainer = (): JSX.Element => (
  <div>
    <StyledLinksContainer>
      {linksArray.map(({ icon, key }: IProps) => (
        <div key={key}>{icon}</div>
      ))}
    </StyledLinksContainer>
  </div>
)

// STYLES

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2.2rem;
  margin: 0rem 0rem 2.9rem 0rem;

  div {
    display: flex;
    justify-content: center;
    width: 3.3rem;
    height: 3.3rem;

    background-color: #202020;

    * {
      width: 1rem;
    }
  }
`
