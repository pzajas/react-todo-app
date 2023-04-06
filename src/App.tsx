import Login from './routes/Login'
import Todos from './routes/Todos'
import Error from './routes/Error'

import ProtectedRoutes from './routes/ProtectedRoutes'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Root from './routes/root'
import Logout from './routes/Logout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/error" element={<Error />} />

      <Route path="/auth" element={<ProtectedRoutes />}>
        <Route path="/auth/todos" element={<Todos />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
