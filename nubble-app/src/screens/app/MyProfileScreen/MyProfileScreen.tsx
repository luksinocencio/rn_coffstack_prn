import React from 'react'

import { useAuthCredentials } from '../../../services/authCredentials/useAuthCredentials'

import { ProfileTemplate } from '../../../components/ProfileTemplate/ProfileTemplate'
import type { AppTabScreenProps } from '../../../routes/navigationType'

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  const { userId } = useAuthCredentials()

  if (!userId) {
    return null
  }

  return <ProfileTemplate userId={userId} isMyProfile />
}
