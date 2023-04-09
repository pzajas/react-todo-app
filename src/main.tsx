import React from 'react'
import ReactDOM from 'react-dom/client'

import { RootRouter as router } from './router/RootRouter'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { store } from './redux/app/store'

import './index.css'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
