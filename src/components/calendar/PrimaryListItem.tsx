import { submitEdit } from './helpers/submitEdit'
import { useState } from 'react'
import { InputArrayType, FormData } from '@typescript/types'
import { PrimaryForm } from './PrimaryForm'
import styled from 'styled-components'
import { PrimaryButton } from '@elements/buttons/PrimaryButton'
import { LoginIcon } from '@assets/icons/LoginIcon'

export const PrimaryListItem = ({ todo, options }: any): JSX.Element => {
  const { id, value } = todo

  const [onDeleteTodo, onCompleteTodo, dispatch] = options
  const [editing, setEditing] = useState(false)

  const inputs: InputArrayType = [
    { type: 'text', name: 'edit', placeholder: 'edit me' },
  ]

  const handleSubmitEdit = async (data: FormData): Promise<void> => {
    await submitEdit({ id, text: data.edit, dispatch })

    setEditing(false)
  }

  return (
    <StyledItemWrapper>
      <StyledListItem
        onClick={() => {
          setEditing(true)
        }}
      >
        {editing ? (
          <StyledPrimaryForm onSubmit={handleSubmitEdit} inputs={inputs} />
        ) : (
          <StyledListText>{value}</StyledListText>
        )}
      </StyledListItem>
      <StyledButtonWrapper>
        <button onClick={() => onCompleteTodo(todo, dispatch)}>C</button>
        <button onClick={() => onDeleteTodo(id, dispatch)}>D</button>
      </StyledButtonWrapper>
    </StyledItemWrapper>
  )
}

// const StyledPrimaryButton = styled(PrimaryButton)`
//   padding: 0rem 1.7rem 0rem 1.7rem;
//   border-radius: 0.2rem;

//   align-items: center;
//   text-align: center;
//   cursor: pointer;

//   background-color: ${({ theme }) => theme.colors.primary};
//   border: ${({ theme }) => theme.borders.secondary};
//   font-size: ${({ theme }) => theme.fonts.small};
// `

const StyledItemWrapper = styled.div`
  /* padding: 1rem 0rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
`

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledListText = styled.div`
  margin-left: 1rem;
`

const StyledPrimaryForm = styled(PrimaryForm)`
  display: flex;
  justify-content: space-between;

  * {
    margin: 0rem 0rem;
    font-size: 1rem;
    border: none;
  }
`

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  height: 100%;

  button {
    border: none;

    width: 2.5rem;

    padding: 0.5rem;
  }
`
