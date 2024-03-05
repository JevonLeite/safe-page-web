import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import api from '~/services/api'

interface IUser {
  token?: string
}

interface IAccessContext {
  user: IUser | undefined
  addUser: (received_user: IUser) => void
  removeUser: (received_user: IUser) => void
}

interface IAccessProviderProps {
  children: ReactNode
}

const AccessContext = createContext<IAccessContext>({} as IAccessContext)

function AccessProvider({ children }: IAccessProviderProps) {
  const [user, setUser] = useState<IUser | undefined>(undefined)

  const addUser = useCallback((received_user: IUser) => {
    setUser(received_user)
  }, [])

  const removeUser = useCallback((received_user: IUser) => {
    if (received_user.token) {
      api.delete(`/users/${received_user.token}`)
    }

    setUser(undefined)
  }, [])

  const value = useMemo(
    () => ({ user, addUser, removeUser }),
    [user, addUser, removeUser],
  )

  return (
    <AccessContext.Provider value={value}>{children}</AccessContext.Provider>
  )
}

function useAccess(): IAccessContext {
  const context = useContext(AccessContext)

  return context
}

export { AccessProvider, useAccess }
