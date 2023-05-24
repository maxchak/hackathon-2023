import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './rootReducer.ts'

import { baseApi } from '@/shared/api'

export const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  })
}

export const appStore = initStore()

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
