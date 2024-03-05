import { ReactNode } from 'react'

import { AccessProvider } from './access'
import { ToastProvider } from './toast'

interface IAppProviderProps {
  children: ReactNode
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <AccessProvider>
      <ToastProvider>{children}</ToastProvider>
    </AccessProvider>
  )
}
