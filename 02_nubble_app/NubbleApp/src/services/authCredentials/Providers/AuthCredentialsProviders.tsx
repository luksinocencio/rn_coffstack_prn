import React, { PropsWithChildren, createContext, useState } from 'react'

import { AuthCredentials } from '@domain'

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

  async function saveCredentials(credentials: AuthCredentials): Promise<void> {
    setAuthCredentials(credentials)
  }

  async function removeCredentils(): Promise<void> {
    setAuthCredentials(null)
  }

  return (
    <AuthCredentialsContenxt.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentils }}>
      {children}
    </AuthCredentialsContenxt.Provider>
  )
}
