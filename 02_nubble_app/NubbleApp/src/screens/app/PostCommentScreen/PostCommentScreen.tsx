import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Screen } from '@components'
import { PostComment, usePostCommentList } from '@domain'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import { PostCommentBottom, PostCommentItem } from './components'

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
    <Screen title="Comentários" canGoBack style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: bottom }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderListFooterComponent}
      />
    </Screen>
  )
}
