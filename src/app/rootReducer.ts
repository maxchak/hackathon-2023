import { combineReducers } from '@reduxjs/toolkit'

import { sessionApi, sessionSlice } from '@/entities/session'
import { baseApi } from '@/shared/api'
import { vacancyApi } from '@/entities/vacancy'

export const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  [sessionApi.reducerPath]: sessionApi.reducer,
  [vacancyApi.reducerPath]: vacancyApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
