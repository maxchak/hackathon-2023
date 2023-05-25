import { RouteProps } from 'react-router-dom'

import { RoutePath } from '@/shared/routes'
import { UserRoles } from '@/entities/user'
import { MainPage } from '@/pages/main'
import { RegistrationPage } from '@/pages/registration'
import { LoginPage } from '@/pages/login'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  notAuthOnly?: boolean
  roles?: UserRoles[]
}

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  {
    path: RoutePath.LOGIN,
    element: <LoginPage />,
    notAuthOnly: true,
  },
  {
    path: RoutePath.SIGNUP,
    element: <RegistrationPage />,
    notAuthOnly: true,
  },
]
