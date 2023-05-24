import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { appRouter } from './appRouter.tsx'

import '@/shared/base.css'
import { checkFingerPrint } from '@/shared/lib'
import { refreshThunk } from '@/features/Refresh'
import { useAppDispatch } from '@/shared/model'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    checkFingerPrint()
  }, [])

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  return <RouterProvider router={appRouter} />
}
