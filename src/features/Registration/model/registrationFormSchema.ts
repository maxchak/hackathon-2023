import { z } from 'zod'

export const registrationFormSchema = z
  .object({
    company: z.string().nonempty('Укажите название компании'),
    name: z.string().min(2, 'Укажите ваше имя'),
    lastName: z.string().min(2, 'Укажите вашу фамилию'),
    email: z.string().min(1, { message: 'Введите валидный email' }).email({
      message: 'Введите валидный email',
    }),
    password: z.string().min(6, 'Пароль должен быть длиннее 5 символов'),
    checkPassword: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    message: 'Пароли не совпадают',
    path: ['checkPassword'],
  })

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>
