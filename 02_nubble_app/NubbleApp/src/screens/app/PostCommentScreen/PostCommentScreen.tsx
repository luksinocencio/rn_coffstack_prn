import React from 'react'

import { Screen, Text } from '@components'
import { usePostCommentList } from '@domain'
import { AppScreenProps } from '@routes'

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId

  const { data } = usePostCommentList(postId)

  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Post comment Screen</Text>
    </Screen>
  )
}
