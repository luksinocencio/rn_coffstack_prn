import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { PostItem, Screen } from '@components'
import { Post, postService } from '@domain'
import { AppTabScreenProps } from '@routes'

import { HomeHeader } from './components/HeaderHome'
import { HomeEmpty } from './components/HomeEmpty'

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>()
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  async function fetchData() {
    try {
      setError(null)
      setLoading(true)
      const list = await postService.getList()
      setPostList(list)
      // setPostList([])
    } catch (er: any) {
      console.log(er)
      setError(er)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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
