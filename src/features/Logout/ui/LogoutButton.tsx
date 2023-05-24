import { logoutThunk } from '../model/logout.ts'

import { useAppDispatch } from '@/shared/model'

export const LogoutButton = () => {
  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(logoutThunk())
  }

  return (
    <div>
      <button onClick={logout}>Выйти</button>
    </div>
  )
}
