import { useCallback, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  RegistrationFormSchema,
  registrationFormSchema,
} from '../model/registrationFormSchema.ts'
import { signupThunk } from '../model/registration.ts'

import { Input, Button } from '@/shared/ui'
import { useAppDispatch } from '@/shared/model'
import { trimOnBlur } from '@/shared/lib/trimOnBlur.ts'

export const RegistrationForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
  })

  const onBlurHandler = useMemo(
    () => trimOnBlur<RegistrationFormSchema>(setValue),
    [setValue],
  )

  const onRegistration = useCallback(
    (form: RegistrationFormSchema) => {
      setIsLoading(true)

      dispatch(
        signupThunk({
          company_name: form.company,
          first_name: form.name,
          last_name: form.lastName,
          email: form.email,
          password: form.password,
        }),
      )
        .unwrap()
        .then(() => navigate('/'))
        .catch((error) => {
          setError('email', { type: 'server', message: error.message })
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [dispatch, navigate, setError],
  )

  return (
    <form onSubmit={handleSubmit(onRegistration)} noValidate>
      <Input
        placeholder="Название компании"
        type="text"
        shadow
        {...register('company')}
        onBlur={onBlurHandler}
      />
      {errors.company && (
        <p className="text-red text-sm mt-1">{errors.company?.message}</p>
      )}
      <Input
        className="mt-4"
        placeholder="Имя"
        type="text"
        shadow
        {...register('name')}
        onBlur={onBlurHandler}
      />
      {errors.name && (
        <p className="text-red text-sm mt-1">{errors.name?.message}</p>
      )}
      <Input
        className="mt-4"
        placeholder="Фамилия"
        type="text"
        shadow
        {...register('lastName')}
        onBlur={onBlurHandler}
      />
      {errors.lastName && (
        <p className="text-red text-sm mt-1">{errors.lastName?.message}</p>
      )}
      <Input
        className="mt-4"
        placeholder="Почта"
        type="email"
        shadow
        autoComplete="new-password"
        {...register('email')}
        onBlur={onBlurHandler}
      />
      {errors.email && (
        <p className="text-red text-sm mt-1">{errors.email?.message}</p>
      )}
      <Input
        className="mt-4"
        placeholder="Пароль"
        type="password"
        shadow
        autoComplete="new-password"
        {...register('password')}
        onBlur={onBlurHandler}
      />
      {errors.password && (
        <p className="text-red text-sm mt-1">{errors.password?.message}</p>
      )}
      <Input
        className="mt-4"
        placeholder="Подтверждение пароля"
        type="password"
        shadow
        {...register('checkPassword')}
        onBlur={onBlurHandler}
      />
      {errors.checkPassword && (
        <p className="text-red text-sm mt-1">{errors.checkPassword?.message}</p>
      )}
      <Button
        className="w-full mt-5"
        type="submit"
        color="primary"
        isLoading={isLoading}
      >
        Регистрация
      </Button>
      <p className="my-4 text-sm text-center">
        Уже есть аккаунт?{' '}
        <Link className="text-blue" to="/login">
          Войти
        </Link>
      </p>
    </form>
  )
}
