import { ErrorPage } from './Errors/ErrorPage'
import { Login } from '@components/authentication/Login'
import { MainLayout } from './routes/MainLayout'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter } from 'react-router-dom'
import { theme } from '../styles/theme'
import { Todos } from '@components/calendar/Todos'

import App from '../App'

export const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    ),
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Login /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },

  {
    path: '/auth',
    element: (
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    ),
    children: [{ path: 'todos', element: <Todos /> }],
  },
])
