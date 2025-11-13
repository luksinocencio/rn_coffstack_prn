import React from 'react'

import { ProfileTemplate } from '@components'
import { AppTabScreenProps } from '@routes'
import { useAuthCredentials } from '@services'

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  const { userId } = useAuthCredentials()

  if (!userId) {
    return null
  }

  return <ProfileTemplate userId={userId} />
}
