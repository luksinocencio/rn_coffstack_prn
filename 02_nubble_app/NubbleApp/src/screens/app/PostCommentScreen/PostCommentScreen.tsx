import React from 'react'

import { Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  console.log(route.params)

  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Post comment Screen</Text>
    </Screen>
  )
}
