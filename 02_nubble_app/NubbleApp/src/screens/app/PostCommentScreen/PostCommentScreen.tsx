import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box, PostItem, Screen } from '@components'
import { PostComment, usePostCommentList, usePostGetById } from '@domain'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'
import { useAuthCredentials } from '@services'

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components'

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const { postId, postAuthorId } = route.params

  const showPost = route.params.showPost || false

  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId)
  const { bottom } = useAppSafeArea()
  const { userId } = useAuthCredentials()
  const { post } = usePostGetById(postId, showPost)

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
    <Screen flex={1} title={showPost ? 'Post' : 'Comentários'} canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListHeaderComponent={
            post && <PostItem hideCommentAction post={post} />
          }
          ListFooterComponent={renderListFooterComponent}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  )
}
