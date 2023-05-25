import { useCallback, useState } from 'react'

import { LoginForm } from '@/features/Login'
import { AuthHeader, Button } from '@/shared/ui'
import { RestoreForm } from '@/features/RestorePassword'

export const LoginPage = () => {
  const [isRestoring, setIsRestoring] = useState(false)

  const onRestoreCancel = useCallback(() => {
    setIsRestoring(false)
  }, [])

  return (
    <>
      <AuthHeader />
      <h1 className="text-center mt-24 mb-8">
        {isRestoring ? 'Восстановление пароля' : 'Добро пожаловать'}
      </h1>
      {isRestoring ? (
        <RestoreForm onBack={onRestoreCancel} />
      ) : (
        <>
          <LoginForm />
          <div className="text-center my-1 border-b border-b-black/[.05]">
            <Button className="text-base" onClick={() => setIsRestoring(true)}>
              Забыли пароль?
            </Button>
          </div>
        </>
      )}
    </>
  )
}
