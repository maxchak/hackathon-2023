import { z } from 'zod'

export const restoreFormSchema = z.object({
  email: z.string().min(1, { message: 'Введите валидный email' }).email({
    message: 'Введите валидный email',
  }),
})

export type RestoreFormSchema = z.infer<typeof restoreFormSchema>
