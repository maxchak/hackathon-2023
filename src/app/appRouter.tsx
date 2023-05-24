import { createBrowserRouter } from 'react-router-dom'

import { baseLayout } from './layouts/baseLayout.tsx'

import { MainPage } from '@/pages/main'
import { RegistrationPage } from '@/pages/registration'
import { LoginPage } from '@/pages/login'

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/signup',
        element: <RegistrationPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
])
