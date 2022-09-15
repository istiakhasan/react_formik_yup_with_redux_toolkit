


import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../Slice/UserDataSlice';
import storage from 'redux-persist/lib/storage';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// configure redux persist 
const persistConfig = {
  key: 'root',
  version:1,
  
  storage,
  whitelist:['users']
}
const persistedReducer = persistReducer(persistConfig, UserSlice)

export const store = configureStore({
  reducer: {users:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const  persistor = persistStore(store)