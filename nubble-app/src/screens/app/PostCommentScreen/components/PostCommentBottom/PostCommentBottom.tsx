import React from 'react'
import { Pressable } from 'react-native'

import { Text } from '@components'

interface PostCommentBottomProps {
  fetchNextPage: () => void
}

export function PostCommentBottom({ fetchNextPage }: PostCommentBottomProps) {
  return (
    <Pressable onPress={fetchNextPage}>
      <Text bold color="primary" textAlign="center">
        Ver mais
      </Text>
    </Pressable>
  )
}
