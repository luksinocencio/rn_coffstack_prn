import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box, Screen } from '@components'
import { PostComment, usePostCommentList } from '@domain'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'
import { useAuthCredentials } from '@services'

import { PostCommentBottom, PostCommentItem } from './components'
import PostCommentTextMessage from './components/PostCommentTextMessage/PostCommentTextMessage'

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const { postId, postAuthorId } = route.params

  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId)
  const { bottom } = useAppSafeArea()
  const { userId } = useAuthCredentials()

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={userId}
        postAuthorId={postAuthorId}
      />
    )
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
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={renderListFooterComponent}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  )
}
