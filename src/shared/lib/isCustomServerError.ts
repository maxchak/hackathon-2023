interface CustomError {
  status: number
  data: CustomErrorData
}

interface CustomErrorData {
  detail: string | number
}

export function isCustomServerError(error: unknown): error is CustomError {
  if (typeof error !== 'object' || error === null) {
    return false
  }

  const obj = error as CustomError

  return (
    typeof obj?.status === 'number' &&
    typeof obj.data === 'object' &&
    obj.data !== null &&
    'detail' in obj.data &&
    (typeof obj.data.detail === 'string' || typeof obj.data.detail === 'number')
  )
}
