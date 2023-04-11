import styled from 'styled-components'

export const SecondaryTextContainer = ({ children, className }: any): any => {
  return (
    <StyledOptionsContainer className={className}>
      {children}
    </StyledOptionsContainer>
  )
}

// STYLES

const StyledOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.8rem;

  margin-bottom: 3.4rem;
`
