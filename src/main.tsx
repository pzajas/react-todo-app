import React from 'react'
import ReactDOM from 'react-dom/client'

import { RootRouter as router } from './router/RootRouter'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { store } from './redux/app/store'

import { GlobalStyle } from './styles/GlobalStyle'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
