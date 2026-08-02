import { useCallback, useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import { useAppState } from '../../hooks/useAppState'

import { permissionService } from './permissionService'
import { PermissionName, PermissionStatus } from './permissionTypes'

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState<PermissionStatus>()

  const isFocused = useIsFocused()
  const appState = useAppState()

  const checkPermission = useCallback(async () => {
    try {
      const currentStatus = await permissionService.check(permissionName)
      setStatus(previousStatus => {
        // No Android o `check` não distingue "negado" de "bloqueado", então uma
        // revalidação zeraria o estado bloqueado e devolveria o usuário para um
        // botão que abre um diálogo que o sistema não mostra mais.
        if (
          previousStatus === 'never_ask_again' &&
          currentStatus === 'denied'
        ) {
          return previousStatus
        }
        return currentStatus
      })
    } catch (error) {
      setStatus('unavailable')
    } finally {
      setIsLoading(false)
    }
  }, [permissionName])

  const requestPermission = useCallback(async (): Promise<PermissionStatus> => {
    try {
      setIsLoading(true)
      const currentStatus = await permissionService.check(permissionName)

      if (currentStatus === 'granted') {
        setStatus(currentStatus)
        return currentStatus
      }

      const requestedStatus = await permissionService.request(permissionName)
      setStatus(requestedStatus)
      return requestedStatus
    } catch (error) {
      setStatus('unavailable')
      return 'unavailable'
    } finally {
      setIsLoading(false)
    }
  }, [permissionName])

  // Revalida ao entrar na tela e ao voltar do segundo plano. É por aqui que a
  // permissão alterada nas Configurações do sistema chega até o app: a tela
  // nunca perde o foco enquanto o usuário está fora dele.
  const isVisible = isFocused && appState === 'active'

  useEffect(() => {
    if (isVisible) {
      checkPermission()
    }
  }, [isVisible, checkPermission])

  return {
    status,
    isLoading,
    checkPermission,
    requestPermission,
  }
}
