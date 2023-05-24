import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { config } from '@/shared/lib'

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  NonNullable<unknown>,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem('_app-token')
    const fingerprint = localStorage.getItem('_app-fp')

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    if (fingerprint) {
      headers.set('x-fingerprint', fingerprint)
    }

    return headers
  },
})
