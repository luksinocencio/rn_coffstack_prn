import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react'

import { AuthCredentials, authService } from '@domain'

import { authCredentialsStorage } from '../authCredentialsStorage'
import { AuthCredentialsService } from '../authCredentialsTypes'

export const AuthCredentialsContenxt = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentils: async () => {},
})

export function AuthCredentialsProvider({ children }: PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    startAuthCredentials()
  }, [])

  async function startAuthCredentials() {
    try {
      const credentials = await authCredentialsStorage.get()
      if (credentials) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        authService.updateToken(credentials.token)
        setAuthCredentials(credentials)
      }
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsLoading(false)
    }
  }

  async function saveCredentials(credentials: AuthCredentials): Promise<void> {
    authCredentialsStorage.set(credentials)
    authService.updateToken(credentials.token)
    setAuthCredentials(credentials)
  }

  async function removeCredentils(): Promise<void> {
    authCredentialsStorage.remove()
    authService.removeToken()
    setAuthCredentials(null)
  }

  return (
    <AuthCredentialsContenxt.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentils }}>
      {children}
    </AuthCredentialsContenxt.Provider>
  )
}
