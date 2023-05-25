import { FC, PropsWithChildren, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { UserRoles } from '@/entities/user'
import { RoutePath } from '@/shared/routes'
import { useTypedSelector } from '@/shared/model'
import {
  isAuthenticated,
  userRole as userRoleSelector,
} from '@/entities/session'

interface RequireAuthProps {
  roles?: UserRoles[]
}

export const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({
  roles,
  children,
}) => {
  const location = useLocation()

  const isAuth = useTypedSelector(isAuthenticated)
  const userRole = useTypedSelector(userRoleSelector)

  const hasRequiredRoles = useMemo(() => {
    if (!userRole) {
      return false
    }

    if (!roles) {
      return true
    }

    return roles.includes(userRole)
  }, [roles, userRole])

  if (!isAuth) {
    return <Navigate replace to={RoutePath.MAIN} state={{ from: location }} />
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate replace to={RoutePath.FORBIDDEN} state={{ from: location }} />
    )
  }

  return <>{children}</>
}
