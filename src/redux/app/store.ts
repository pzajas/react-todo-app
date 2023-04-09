import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import tokenReducer from '../features/tokenSlice'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'

const persistConfig = {
  timeout: 100,
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  token: tokenReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
