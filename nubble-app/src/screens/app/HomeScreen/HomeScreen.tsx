import React from 'react'
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native'

import type { Post } from '../../../domain/Post/postTypes'
import { postService } from '../../../domain/Post/postService'
import { QueryKeys } from '../../../infra/infraTypes'

import { InfinityScrollList } from '../../../components/InfinityScrollList/InfinityScrollList'
import { PostItem } from '../../../components/PostItem/PostItem'
import { Screen } from '../../../components/Screen/Screen'
import type { AppTabScreenProps } from '../../../routes/navigationType'

import { HomeHeader } from './components/HomeHeader'

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList]}
        getList={postService.getList}
        renderItem={renderItem}
        flatListProps={{ ListHeaderComponent: <HomeHeader /> }}
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
}
