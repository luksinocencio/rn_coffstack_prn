import React, { useRef } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { useScrollToTop } from '@react-navigation/native'

import { PostItem, Screen } from '@components'
import { Post, usePostList } from '@domain'
import { AppTabScreenProps } from '@routes'

import { HomeHeader } from './components/HeaderHome'
import { HomeEmpty } from './components/HomeEmpty'

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const { postList, loading, error, refresh, fetchNextPage } = usePostList()

  const flatListRef = useRef<FlatList<Post> | null>(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={refresh} />
        }
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
  flex: 1,
}
