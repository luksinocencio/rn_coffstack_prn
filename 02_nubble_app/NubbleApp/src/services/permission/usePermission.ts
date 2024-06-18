import { useEffect, useState } from 'react'

import { permissionServiceAndroid } from './permissionService.android.ts'
import { PermissionName, PermissionStatus } from './permissionTypes.ts'

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState<PermissionStatus>()

  async function checkPermission() {
    try {
      setIsLoading(true)
      const initialState = await permissionServiceAndroid.check(permissionName)
      if (initialState === 'denied') {
        const _status = await permissionServiceAndroid.request(permissionName)
        setStatus(_status)
      } else {
        setStatus(initialState)
      }
    } catch (error) {
      setStatus('unavailable')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkPermission()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { status, isLoading }
}
