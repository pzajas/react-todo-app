import { createBrowserRouter } from 'react-router-dom'

import Login from './routes/Login'
import Logout from './routes/Logout'
import Todos from './routes/Todos'

import App from '../App'
import ProtectedRoutes from './routes/ProtectedRoutes'

import { ErrorPage } from './Errors/ErrorPage'

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
