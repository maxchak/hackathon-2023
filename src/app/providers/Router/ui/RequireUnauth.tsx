import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { RoutePath } from '@/shared/routes'
import { useTypedSelector } from '@/shared/model'
import { isAuthenticated } from '@/entities/session'

export const RequireUnauth: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()

  const isAuth = useTypedSelector(isAuthenticated)

  if (isAuth) {
    return <Navigate replace to={RoutePath.MAIN} state={{ from: location }} />
  }

  return <>{children}</>
}
