import { useCallback, useState } from 'react'

import { useFocusEffect } from '@react-navigation/native'

import { permissionService } from './permissionService'
import { PermissionName, PermissionStatus } from './permissionTypes'

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState<PermissionStatus>()

  const checkPermission = useCallback(async () => {
    try {
      setIsLoading(true)
      const initialStatus = await permissionService.check(permissionName)
      setStatus(initialStatus)
    } catch (error) {
      setStatus('unavailable')
    } finally {
      setIsLoading(false)
    }
  }, [permissionName])

  const requestPermission = useCallback(async () => {
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

  useFocusEffect(
    useCallback(() => {
      checkPermission()
    }, [checkPermission]),
  )

  return {
    status,
    isLoading,
    checkPermission,
    requestPermission,
  }
}
