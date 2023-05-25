import { useCallback, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginThunk } from '../model/login.ts'
import { loginFormSchema, LoginFormSchema } from '../model/loginFormSchema.ts'

import { useAppDispatch } from '@/shared/model'
import { Button, Input } from '@/shared/ui'
import { trimOnBlur } from '@/shared/lib/trimOnBlur.ts'

export const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const onBlurHandler = useMemo(
    () => trimOnBlur<LoginFormSchema>(setValue),
    [setValue],
  )

  const onLogin = useCallback(
    ({ email, password }: LoginFormSchema) => {
      setIsLoading(true)

      dispatch(loginThunk({ email, password }))
        .unwrap()
        .then(() => navigate('/'))
        .catch((error) => {
          setError('password', { type: 'server', message: error.message })
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [dispatch, navigate, setError],
  )

  return (
    <form
      className="flex flex-col gap-y-2 bg-white rounded-2xl py-8 px-4 drop-shadow-[0_4px_19px_rgba(0,0,0,0.06)]"
      noValidate
      onSubmit={handleSubmit(onLogin)}
    >
      <Input
        placeholder="Почта"
        type="email"
        border="dashed"
        {...register('email')}
        onBlur={onBlurHandler}
      />
      {errors.email && (
        <p className="text-red text-sm">{errors.email?.message}</p>
      )}
      <Input
        placeholder="Пароль"
        type="password"
        border="dashed"
        {...register('password')}
        onBlur={onBlurHandler}
      />
      {errors.password && (
        <p className="text-red text-sm">{errors.password?.message}</p>
      )}
      <Button type="submit" color="primary" isLoading={isLoading}>
        Войти
      </Button>
      <p className="mt-2 text-sm text-center">
        Нет аккаунта?{' '}
        <Link className="text-blue" to="/signup">
          Регистрация
        </Link>
      </p>
    </form>
  )
}
