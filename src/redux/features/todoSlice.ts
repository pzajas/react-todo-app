import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodo {
  id: number
  value: string
  completed: boolean
  userId: number
}

type TodoState = ITodo[]

interface SetTodosPayload {
  todos: ITodo[]
}

interface AddTodoPayload {
  id: number
  value: string
  completed: boolean
  userId: number
}

const initialState: TodoState = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<SetTodosPayload>): void => {
      state.splice(0, state.length, ...action.payload.todos)
    },
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      const newTodo: ITodo = {
        id: action.payload.id,
        value: action.payload.value,
        completed: action.payload.completed,
        userId: action.payload.userId,
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { addTodo, deleteTodo, setTodos } = todoSlice.actions
export default todoSlice.reducer
