import { ReactNode } from 'react'

import { ToastProvider } from './toast'

interface IAppProviderProps {
  children: ReactNode
}

export default function AppProvider({ children }: IAppProviderProps) {
  return <ToastProvider>{children}</ToastProvider>
}
