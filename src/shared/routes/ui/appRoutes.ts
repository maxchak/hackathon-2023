enum AppRoutes {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.SIGNUP]: '/signup',
  [AppRoutes.FORBIDDEN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
}
