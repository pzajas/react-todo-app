import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SecondaryLink = ({ path, text }: any): any => {
  return <StyledLink to={path}>{text}</StyledLink>
}

const StyledLink = styled(Link)`
  margin-left: 0.1rem;

  text-align: center;
  font-weight: normal;
  text-decoration: none;

  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.secondary};
`
