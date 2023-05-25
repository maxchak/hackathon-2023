import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { sessionApi } from '../api/sessionApi.ts'
import { saveTokenToLocalStorage } from '../lib/saveTokenToLocalStorage.ts'

import { User } from '@/entities/user'

interface InitialState {
  user: null | User
}

const initialState: InitialState = {
  user: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InitialState['user']>) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user

        saveTokenToLocalStorage(payload.accessToken, payload.expiresIn)
      },
    )

    builder.addMatcher(
      sessionApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user

        saveTokenToLocalStorage(payload.accessToken, payload.expiresIn)
      },
    )

    builder.addMatcher(
      sessionApi.endpoints.refresh.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user

        saveTokenToLocalStorage(payload.accessToken, payload.expiresIn)
      },
    )
  },
})
