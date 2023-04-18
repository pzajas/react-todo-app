import styled from 'styled-components'

import { type ButtonType } from '@typescript/types'

export const PrimaryButton = ({
  text,
  icon,
  className,
}: ButtonType): JSX.Element => {
  return (
    <button className={className}>
      <Styled>
        {text}
        {icon}
      </Styled>
    </button>
  )
}

const Styled = styled.div`
  display: flex;
  place-content: center;
  align-items: center;

  gap: 1rem;
`
