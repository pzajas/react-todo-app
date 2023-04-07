import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import Login from './routes/Login'
import Logout from './routes/Logout'
import Todos from './routes/Todos'

import ProtectedRoutes from './routes/ProtectedRoutes'
import App from '../App'
import ErrorPage from './Errors/ErrorPage'

export const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/login', element: <Login /> },
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
