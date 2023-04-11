import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: #01ff8a;

  text-align: center;
  font-weight: normal;
  text-decoration: none;

  margin-left: 0.1rem;
`

export const SecondaryLink = ({ path, text }: any): any => {
  return <StyledLink to={path}>{text}</StyledLink>
}
