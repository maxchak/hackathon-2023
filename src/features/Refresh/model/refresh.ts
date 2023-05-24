import { createAsyncThunk } from '@reduxjs/toolkit'

import { sessionApi } from '@/entities/session'
import { isFetchBaseQueryError } from '@/shared/api'

export const refreshThunk = createAsyncThunk<void, void, { state: RootState }>(
  'session/refresh',
  async (_: unknown, { dispatch }) => {
    try {
      await dispatch(sessionApi.endpoints.refresh.initiate()).unwrap()
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (typeof error.data === 'string') {
          throw new Error(error.data)
        }
      }

      throw new Error('Unknown error')
    }
  },
)
