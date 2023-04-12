import styled from 'styled-components'

export const PrimaryDivider = (): JSX.Element => {
  return <StyledRectangle />
}

const StyledRectangle = styled.div`
  width: 5rem;
  height: 1px;
  background: linear-gradient(
      90deg,
      rgba(0, 195, 101, 0.4) -73.21%,
      rgba(0, 195, 113, 0) 139.29%
    ),
    linear-gradient(
      90deg,
      rgba(0, 195, 101, 0.06) 0%,
      rgba(0, 195, 101, 0) 0.02%
    );
`
