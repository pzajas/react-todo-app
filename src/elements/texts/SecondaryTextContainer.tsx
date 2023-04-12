import styled from 'styled-components'

export const SecondaryTextContainer = ({ children, className }: any): any => {
  return <OptionsContainer className={className}>{children}</OptionsContainer>
}

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.4rem;

  font-size: ${({ theme }) => theme.fonts.small};
`
