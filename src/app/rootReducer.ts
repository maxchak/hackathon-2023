import { combineReducers } from '@reduxjs/toolkit'

import { sessionApi, sessionSlice } from '@/entities/session'
import { baseApi } from '@/shared/api'

export const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  [sessionApi.reducerPath]: sessionApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
