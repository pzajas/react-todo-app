import styled from 'styled-components'

export const PrimaryButton = ({ text, icon }: any): JSX.Element => {
  return (
    <StyledButton>
      <div>
        {text}
        {icon}
      </div>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 8.3rem;
  height: 2.7rem;
  padding: 0rem 1.7rem 0rem 1.7rem;
  border-radius: 0.2rem;

  align-items: center;
  text-align: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.secondary};
  font-size: ${({ theme }) => theme.fonts.small};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
