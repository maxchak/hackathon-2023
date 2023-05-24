import { createAsyncThunk } from '@reduxjs/toolkit'

import { isFetchBaseQueryError } from '@/shared/api'
import { sessionApi, RequestLoginBody } from '@/entities/session'

export const loginThunk = createAsyncThunk<
  void,
  RequestLoginBody,
  { state: RootState }
>('session/login', async (body: RequestLoginBody, { dispatch }) => {
  try {
    await dispatch(sessionApi.endpoints.login.initiate(body)).unwrap()
  } catch (error) {
    if (isFetchBaseQueryError(error)) {
      if (typeof error.data === 'string') {
        throw new Error(error.data)
      }
    }

    throw new Error('Unknown error')
  }
})
