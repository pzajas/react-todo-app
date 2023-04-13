import { ErrorPage } from './Errors/ErrorPage'
import { Login } from '@components/authentication/Login'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter } from 'react-router-dom'
import { theme } from '../styles/theme'

import App from '../App'
import Logout from './routes/Logout'
import ProtectedRoutes from './routes/ProtectedRoutes'
import Todos from './routes/Todos'

export const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    ),
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Login /> },
      { path: '*', element: <ErrorPage /> },
      { path: '/auth/todos', element: <Todos /> },

      {
        path: 'auth',
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/auth/logout',
            element: <Logout />,
          },
        ],
      },
    ],
  },
])
