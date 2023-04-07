import React from 'react'
import ReactDOM from 'react-dom/client'

import { RootRouter as router } from './router/RootRouter'

import { Provider } from 'react-redux'
import { store } from './redux/app/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { RouterProvider } from 'react-router-dom'

let persistor = persistStore(store)

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
