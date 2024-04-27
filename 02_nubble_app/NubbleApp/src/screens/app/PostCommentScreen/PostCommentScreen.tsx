import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box, Screen } from '@components'
import { PostComment, usePostCommentList } from '@domain'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import { PostCommentBottom, PostCommentItem } from './components'
import PostCommentTextMessage from './components/PostCommentTextMessage/PostCommentTextMessage'

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId
  const { data, fetchNextPage, hasNextPage } = usePostCommentList(postId)
  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />
  }

  function renderListFooterComponent() {
    if (!hasNextPage) {
      return null
    }

    return <PostCommentBottom fetchNextPage={fetchNextPage} />
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={renderListFooterComponent}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  )
}
