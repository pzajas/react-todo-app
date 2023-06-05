import { Outlet } from 'react-router-dom'

import styled from 'styled-components'

export const MainLayout = (): any => {
  return (
    <StyledLayoutWrapper>
      <StyledNavbar>Navbar</StyledNavbar>

      <StyledContentWrapper>
        <Outlet />
      </StyledContentWrapper>
      <StyledFooter>Footer</StyledFooter>
    </StyledLayoutWrapper>
  )
}

const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
`

const StyledNavbar = styled.nav`
  height: 8vh;
  margin-bottom: 2vh;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: ${({ theme }) => theme.borders.secondary};
`

const StyledContentWrapper = styled.div`
  flex: 1;
`

const StyledFooter = styled.div`
  height: 8vh;
  margin-top: 2vh;

  border-top: ${({ theme }) => theme.borders.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`
