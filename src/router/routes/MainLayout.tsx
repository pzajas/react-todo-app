import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  height: 4rem;
  background-color: #303030;
`

const StyledFooter = styled.nav`
  height: 4rem;
  background-color: #303030;
`

export const MainLayout = (): any => {
  return (
    <>
      <header>
        <StyledNavbar>Navbar</StyledNavbar>
      </header>
      <Outlet />
      <StyledFooter>Footer</StyledFooter>
    </>
  )
}
