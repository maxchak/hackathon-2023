import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: 'Введите валидный email' }).email({
    message: 'Введите валидный email',
  }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен быть длиннее 5 символов' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
