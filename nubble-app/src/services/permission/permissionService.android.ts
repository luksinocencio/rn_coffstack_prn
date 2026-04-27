import { Permission, PermissionsAndroid, Platform } from 'react-native'

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes'

async function check(name: PermissionName): Promise<PermissionStatus> {
  const permissions = mapNameToPermissions(name)
  if (permissions.length > 0) {
    const results = await Promise.all(
      permissions.map(permission => PermissionsAndroid.check(permission)),
    )

    return results.some(Boolean) ? 'granted' : 'denied'
  }

  return 'unavailable'
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  const permissions = mapNameToPermissions(name)
  if (permissions.length > 0) {
    const results = await PermissionsAndroid.requestMultiple(permissions)
    const statusList = Object.values(results)

    if (statusList.includes(PermissionsAndroid.RESULTS.GRANTED)) {
      return 'granted'
    }

    if (statusList.includes(PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN)) {
      return 'never_ask_again'
    }

    return 'denied'
  }

  return 'unavailable'
}

function mapNameToPermissions(name: PermissionName): Permission[] {
  const platform = Platform.Version as number

  switch (name) {
    case 'photoLibrary':
      if (platform >= 34) {
        return [
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VISUAL_USER_SELECTED,
        ]
      }

      if (platform >= 33) {
        return [PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES]
      }

      return [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE]

    case 'camera':
      return [PermissionsAndroid.PERMISSIONS.CAMERA]

    default:
      return []
  }
}

export const permissionService: PermissionService = { request, check }
