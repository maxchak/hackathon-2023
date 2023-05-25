import { useEffect } from 'react'

import { AppRouter } from './providers/Router'

import '@/shared/base.css'
import { checkFingerPrint } from '@/shared/lib'
import { useAppDispatch, useTypedSelector } from '@/shared/model'
import { initUser, isAuthLoading, isUserInitialized } from '@/entities/session'
import { refreshThunk } from '@/features/Refresh'
import { FullPageLoader } from '@/shared/ui'

export const App = () => {
  const dispatch = useAppDispatch()

  const isLoading = useTypedSelector(isAuthLoading)
  const isUserInit = useTypedSelector(isUserInitialized)

  useEffect(() => {
    checkFingerPrint()
  }, [])

  useEffect(() => {
    dispatch(refreshThunk())
    dispatch(initUser())
  }, [dispatch])

  return !isUserInit || isLoading ? <FullPageLoader /> : <AppRouter />
}
