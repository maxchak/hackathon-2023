import { FetchArgs } from '@reduxjs/toolkit/query'
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { Mutex } from 'async-mutex'

import { baseQuery } from './baseQuery.ts'

const AUTH_ERROR_CODES = new Set([401])

const mutex = new Mutex()

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs> = async (
  args,
  api,
  extraOptions,
) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (
    typeof result.error?.status === 'number' &&
    AUTH_ERROR_CODES.has(result.error.status) &&
    api.endpoint !== 'refresh'
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'account/refresh_token' },
          api,
          extraOptions,
        )

        if (refreshResult.data) {
          result = await baseQuery(args, api, extraOptions)
        } else {
          localStorage.removeItem('_app-token')
          localStorage.removeItem('_app-token-exp')
          // await baseQuery(
          //   { credentials: 'include', url: 'account/logout' },
          //   api,
          //   extraOptions,
          // )
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
