import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

import { Platform } from 'react-native'
import type { AuthCredentials } from '../domain/Auth/authTypes'

/**
 * export const baseURL = 'https://nubble-api.coffstack.com.br/'
 */

const baseURL = Platform.select({
  ios: 'http://localhost:3333',
  android: 'http://10.0.2.2:3333',
})

export const api = axios.create({
  baseURL,
})

type InterceptorProps = {
  authCredentials: AuthCredentials | null
  saveCredentials: (ac: AuthCredentials) => Promise<void>
  removeCredentials: () => Promise<void>
  authenticateByRefreshToken: (refreshToken: string) => Promise<AuthCredentials>
  isRefreshTokenRequest: (request: AxiosRequestConfig) => boolean
}

export function registerInterceptor({
  authenticateByRefreshToken,
  authCredentials,
  isRefreshTokenRequest,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config
      const hasNotRefreshToken = !authCredentials?.refreshToken
      const isFailedRefreshTokenRequest = isRefreshTokenRequest(failedRequest)

      if (responseError.response.status === 401) {
        if (
          hasNotRefreshToken ||
          isFailedRefreshTokenRequest ||
          failedRequest.sent
        ) {
          removeCredentials()
          return Promise.reject(responseError)
        }

        failedRequest.sent = true

        const newAuthCredentials = await authenticateByRefreshToken(
          authCredentials?.refreshToken,
        )
        saveCredentials(newAuthCredentials)

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`

        return api(failedRequest)
      }

      return Promise.reject(responseError)
    },
  )

  return () => api.interceptors.response.eject(interceptor)
}
