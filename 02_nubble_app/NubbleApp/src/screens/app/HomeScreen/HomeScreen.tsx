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
  const { postList, loading, error, fetchData } = usePostList()

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={fetchData} />
        }
        contentContainerStyle={{ flexGrow: 1 }}
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
