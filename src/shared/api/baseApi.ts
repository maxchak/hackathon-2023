import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './baseQueryWithReauth.ts'
import { SESSION_TAG } from './tags.ts'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: [SESSION_TAG],
  endpoints: () => ({}),
})
