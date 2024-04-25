import React from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { PostItem, Screen } from '@components'
import { Post, usePostList } from '@domain'
import { AppTabScreenProps } from '@routes'

import { HomeHeader } from './components/HeaderHome'
import { HomeEmpty } from './components/HomeEmpty'

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const { postList, loading, error, fetchData, fetchNextPage } = usePostList()

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={fetchData} />
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
