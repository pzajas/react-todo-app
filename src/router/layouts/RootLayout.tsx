import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const RootLayout = (): any => {
  return (
    <StyledLayoutWrapper>
      <Outlet />
    </StyledLayoutWrapper>
  )
}

export default RootLayout

const StyledLayoutWrapper = styled.div`
  padding: 5rem 6rem 5rem 6rem;
`
