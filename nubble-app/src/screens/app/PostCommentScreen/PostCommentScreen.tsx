import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box } from '../../../components/Box/Box'
import { PostItem } from '../../../components/PostItem/PostItem'
import { Screen } from '../../../components/Screen/Screen'
import type { PostComment } from '../../../domain/PostComment/postCommentTypes'
import { usePostCommentList } from '../../../domain/PostComment/useCases/usePostCommentList'
import { usePostGetById } from '../../../domain/Post/useCases/usePostGetById'
import { useAppSafeArea } from '../../../hooks/useAppSafeArea'
import type { AppScreenProps } from '../../../routes/navigationType'
import { useAuthCredentials } from '../../../services/authCredentials/useAuthCredentials'

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
