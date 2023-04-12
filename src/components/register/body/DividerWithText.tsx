import { SecondaryText } from '../../../elements/texts/paragraphs/SecondaryText'

import PrimaryDivider from '../../../elements/dividers/PrimaryDivider'
import styled from 'styled-components'

const DividerWithText = (): JSX.Element => {
  return (
    <StyledConnectContainer>
      <StyledPrimaryDivider />
      <SecondaryText text="OR CONNECT WITH" />
      <PrimaryDivider />
    </StyledConnectContainer>
  )
}

export default DividerWithText

// STYLES

const StyledConnectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 4rem;

  font-size: ${({ theme }) => theme.fonts.small};
`
const StyledPrimaryDivider = styled.div`
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
  transform: rotate(180deg);
`
