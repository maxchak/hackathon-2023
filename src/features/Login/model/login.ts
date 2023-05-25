import { createAsyncThunk } from '@reduxjs/toolkit'

import { isFetchBaseQueryError } from '@/shared/api'
import { sessionApi, RequestLoginBody } from '@/entities/session'
import { isCustomServerError } from '@/shared/lib/isCustomServerError.ts'

export const loginThunk = createAsyncThunk<
  void,
  RequestLoginBody,
  { state: RootState }
>('session/login', async (body, { dispatch }) => {
  try {
    await dispatch(sessionApi.endpoints.login.initiate(body)).unwrap()
  } catch (error) {
    if (isFetchBaseQueryError(error)) {
      if (typeof error.data === 'string') {
        throw new Error(error.data)
      }
    }

    if (isCustomServerError(error) && error.status === 400) {
      switch (error.data?.detail) {
        case 10:
          throw 'Пользователей с данной почтой не существует'
        case 11:
          throw 'Неверный пароль'
      }
    }

    throw new Error('Произошла неизвестная ошибка')
  }
})
