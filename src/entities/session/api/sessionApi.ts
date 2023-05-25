import { Session, ResponseSession } from '../model/types.ts'

import { RequestLoginBody, RequestSignupBody } from './types.ts'

import { baseApi } from '@/shared/api'
import { toCamelCase } from '@/shared/lib/toCamelCase.ts'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: '/auth/sign-in',
        method: 'POST',
        body,
      }),
      // invalidatesTags: [SESSION_TAG],
      transformResponse: (response: ResponseSession) =>
        toCamelCase<ResponseSession>(response),
    }),
    signup: build.mutation<Session, RequestSignupBody>({
      query: (body) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body,
      }),
      // invalidatesTags: [SESSION_TAG],
      transformResponse: (response: ResponseSession) =>
        toCamelCase<ResponseSession>(response),
    }),
    refresh: build.query<Session, void>({
      query: () => ({
        url: '/auth/refresh_token',
      }),
      // providesTags: [SESSION_TAG],
      transformResponse: (response: ResponseSession) =>
        toCamelCase<ResponseSession>(response),
    }),
    logout: build.query<void, void>({
      query: () => '/auth/logout',
    }),
  }),
})
