import { memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  AppRoutesProps,
  routeConfig,
} from '../../../config/RouteConfig/RouteConfig.tsx'
import { baseLayout } from '../../../layouts/baseLayout.tsx'

import { RequireAuth } from './RequireAuth.tsx'
import { RequireUnauth } from './RequireUnauth.tsx'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{route.element}</RequireAuth>
          ) : route.notAuthOnly ? (
            <RequireUnauth>{route.element}</RequireUnauth>
          ) : (
            route.element
          )
        }
      />
    )
  }, [])

  return (
    <Routes>
      <Route element={baseLayout} errorElement={<div>error</div>}>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Route>
    </Routes>
  )
})
