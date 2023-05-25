import { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  restoreFormSchema,
  RestoreFormSchema,
} from '../model/restoreFormSchema.ts'

import { Button, Input } from '@/shared/ui'
import { trimOnBlur } from '@/shared/lib/trimOnBlur.ts'
// import { useAppDispatch } from '@/shared/model'

interface Props {
  onBack: () => void
}

export const RestoreForm: FC<Props> = ({ onBack }) => {
  // const dispatch = useAppDispatch()

  const {
    // setError,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<RestoreFormSchema>({
    resolver: zodResolver(restoreFormSchema),
  })

  const onBlurHandler = useMemo(
    () => trimOnBlur<RestoreFormSchema>(setValue),
    [setValue],
  )

  const onRestore = () => {
    // TODO dispatch restore action
  }

  return (
    <form onSubmit={handleSubmit(onRestore)} noValidate>
      <p>
        Введите адрес электронной почты, который использовался при регистрации.
        На него будет отправлен код для восстановления пароля:
      </p>
      <Input
        className="mt-5"
        placeholder="example@site.ru"
        type="email"
        border="dashed"
        {...register('email')}
        onBlur={onBlurHandler}
      />
      {errors.email && (
        <p className="text-red text-sm mt-1">{errors.email?.message}</p>
      )}
      <div className="grid grid-cols-2 gap-2 mt-5">
        <Button type="submit" color="primary">
          Получить код
        </Button>
        <Button color="default" onClick={onBack}>
          Назад
        </Button>
      </div>
    </form>
  )
}
