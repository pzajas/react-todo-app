import { createBrowserRouter } from 'react-router-dom'

import { Login } from '../components/login/Login'
import Logout from './routes/Logout'
import Todos from './routes/Todos'

import App from '../App'
import ProtectedRoutes from './routes/ProtectedRoutes'

import { ErrorPage } from './Errors/ErrorPage'
import { Register } from '../components/register/Register'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

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
      { path: '/register', element: <Register /> },
      { path: '*', element: <ErrorPage /> },

      {
        path: 'auth',
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/auth/logout',
            element: <Logout />,
          },
          {
            path: '/auth/todos',
            element: <Todos />,
          },
        ],
      },
    ],
  },
])
