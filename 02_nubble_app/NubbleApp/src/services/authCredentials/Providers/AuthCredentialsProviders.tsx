import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react'

import { api } from '@api'
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

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        const status = responseError.response.status
        console.log({ status })

        if (responseError.response.status === 401) {
          if (!authCredentials?.refreshToken) {
            removeCredentils()
            return Promise.reject(responseError)
          }

          const failedRequest = responseError.config

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials?.refreshToken,
            )

          saveCredentials(newAuthCredentials)

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`

          return api(failedRequest)
        }
      },
    )

    // remove listener when component unmount
    return () => api.interceptors.response.eject(interceptor)
  }, [authCredentials?.refreshToken])

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
