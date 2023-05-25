import { Link } from 'react-router-dom'

import { isAuthenticated } from '@/entities/session'
import { useTypedSelector } from '@/shared/model'
import { LogoutButton } from '@/features/Logout'

export const MainPage = () => {
  const isAuth = useTypedSelector(isAuthenticated)

  return (
    <div>
      {isAuth ? (
        <LogoutButton />
      ) : (
        <Link className="inline-block py-3" to="/login">
          Войти в аккаунт
        </Link>
      )}
    </div>
  )
}
