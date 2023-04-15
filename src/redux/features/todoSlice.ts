import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodo {
  id: number
  value: string
  completed: boolean
}

type TodoState = ITodo[]

interface SetTodosPayload {
  todos: ITodo[]
}

interface AddTodoPayload {
  id: number
  value: string
  completed: boolean
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
      }
      state.push(newTodo)
    },
    updateTodo: (state, action: PayloadAction<any>) => {
      const { id, text } = action.payload
      const todoIndex = state.findIndex((todo) => todo.id === id)
      if (todoIndex !== -1) {
        state[todoIndex].value = text
      }
    },
    completeTodo: (state, action: PayloadAction<any>) => {
      const { id, completed } = action.payload
      const todoIndex = state.findIndex((todo) => todo.id === id)
      if (todoIndex !== -1) {
        state[todoIndex].completed = !completed
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { addTodo, completeTodo, deleteTodo, updateTodo, setTodos } =
  todoSlice.actions
export default todoSlice.reducer
