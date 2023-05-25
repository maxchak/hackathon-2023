import { Vacancy } from '../model/types.ts'

import { RequestVacancy, ResponseVacancy } from './types.ts'

import { baseApi } from '@/shared/api'
import { toCamelCase } from '@/shared/lib'

export const vacancyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<Vacancy, void>({
      query: () => '/vacancy/all',
      transformResponse: (response: ResponseVacancy) =>
        toCamelCase<ResponseVacancy>(response),
    }),
    createVacancy: build.mutation<void, RequestVacancy>({
      query: (body) => ({
        url: '/vacancy/create',
        method: 'POST',
        body,
      }),
    }),
  }),
})
