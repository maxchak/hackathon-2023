import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'

import '@/shared/base.css'
import { appStore } from '@/app/appStore.ts'
import { App } from '@/app/App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
