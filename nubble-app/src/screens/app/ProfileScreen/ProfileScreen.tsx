import React from 'react'

import { ProfileTemplate } from '../../../components/ProfileTemplate/ProfileTemplate'
import type { AppScreenProps } from '../../../routes/navigationType'

export function ProfileScreen({ route }: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId

  return <ProfileTemplate userId={userId} />
}
