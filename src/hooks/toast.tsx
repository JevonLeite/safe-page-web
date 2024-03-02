import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { v4 } from 'uuid'

import { Toasts } from '~/components'

interface IToastProps {
  children: ReactNode
}

export interface IToastMessage {
  id: string
  type: 'info' | 'success' | 'error' | 'warning'
  title: string
  description: string
}

interface IToastContextDate {
  addToast(message: Omit<IToastMessage, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<IToastContextDate>({} as IToastContextDate)

function ToastProvider({ children }: IToastProps) {
  const [messages, setMessages] = useState<IToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const message = {
        id: v4(),
        type,
        title,
        description,
      }

      setMessages((state) => [...state, message])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toasts messages={messages} />
    </ToastContext.Provider>
  )
}

function useToast(): IToastContextDate {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToast }
