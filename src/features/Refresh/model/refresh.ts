import { createAsyncThunk } from '@reduxjs/toolkit'

import { sessionApi, sessionSlice } from '@/entities/session'
import { isFetchBaseQueryError } from '@/shared/api'

export const refreshThunk = createAsyncThunk<void, void, { state: RootState }>(
  'session/refresh',
  async (_: unknown, { dispatch }) => {
    try {
      dispatch(sessionSlice.actions.setLoading(true))
      await dispatch(sessionApi.endpoints.refresh.initiate()).unwrap()
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (typeof error.data === 'string') {
          throw new Error(error.data)
        }
      }

      throw new Error('Unknown error')
    } finally {
      dispatch(sessionSlice.actions.setLoading(false))
    }
  },
)
