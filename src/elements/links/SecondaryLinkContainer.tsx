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
    <LinksContainer>
      {linksArray.map(({ icon, key }: IProps) => (
        <div key={key}>{icon}</div>
      ))}
    </LinksContainer>
  </div>
)

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2.2rem;
  margin-bottom: 4rem;

  div {
    display: flex;
    justify-content: center;
    width: 3.3rem;
    height: 3.3rem;

    background-color: ${({ theme }) => theme.colors.button};
    border-bottom: ${({ theme }) => theme.borders.secondary};

    * {
      width: 1rem;
    }
  }
`
