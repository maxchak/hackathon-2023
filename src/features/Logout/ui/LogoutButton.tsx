import { logoutThunk } from '../model/logout.ts'

import { useAppDispatch } from '@/shared/model'
import { Button } from '@/shared/ui'

export const LogoutButton = () => {
  const dispatch = useAppDispatch()

  const logout = async () => {
    localStorage.removeItem('_app-token')
    localStorage.removeItem('_app-token-exp')

    await dispatch(logoutThunk())

    window.location.href = '/login'
  }

  return (
    <div>
      <Button color="default" onClick={logout}>
        Выйти
      </Button>
    </div>
  )
}
