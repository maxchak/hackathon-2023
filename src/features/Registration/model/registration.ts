import { createAsyncThunk } from '@reduxjs/toolkit'

import { isFetchBaseQueryError } from '@/shared/api'
import { sessionApi, RequestSignupBody } from '@/entities/session'

export const signupThunk = createAsyncThunk<
  void,
  RequestSignupBody,
  { state: RootState }
>('session/signup', async (body, { dispatch }) => {
  try {
    await dispatch(sessionApi.endpoints.signup.initiate(body)).unwrap()
  } catch (error) {
    if (isFetchBaseQueryError(error)) {
      if (typeof error.data === 'string') {
        throw new Error(error.data)
      }
    }

    throw new Error('Unknown error')
  }
})
