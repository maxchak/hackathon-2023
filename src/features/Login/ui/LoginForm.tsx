import { loginThunk } from '../model/login.ts'

import { useAppDispatch } from '@/shared/model'

export const LoginForm = () => {
  const dispatch = useAppDispatch()

  const login = () => {
    dispatch(loginThunk({ email: 'user@example.com', password: 'string' }))
  }

  return (
    <div>
      <button className="btn" onClick={login}>
        Войти
      </button>
    </div>
  )
}
