import styled from 'styled-components'

export const PrimaryButton = ({ text, icon }: any): JSX.Element => {
  return (
    <>
      <StyledButton>
        <div>
          {text}
          {icon}
        </div>
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button`
  width: 8.3rem;
  height: 2.7rem;
  background-color: #181818;

  padding: 0rem 1.7rem 0rem 1.7rem;

  align-items: center;
  text-align: center;

  border-radius: 0.2rem;

  border: 0.1rem solid #01ff8a;
  cursor: pointer;

  font-size: 0.8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
