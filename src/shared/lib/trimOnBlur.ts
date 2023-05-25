import { ChangeEvent } from 'react'
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form'

export const trimOnBlur =
  <T extends FieldValues>(setValue: UseFormSetValue<T>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    const trimmedValue = value.trim()

    setValue(name as Path<T>, trimmedValue as PathValue<string, string>)
  }
