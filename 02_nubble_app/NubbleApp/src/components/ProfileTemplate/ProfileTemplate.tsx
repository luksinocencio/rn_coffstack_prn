import React from 'react'
import { FlatList, Image, ListRenderItemInfo } from 'react-native'

import { Box, ProfileAvatar, Text } from '@components'
import { Post, usePostList, useUserGetById } from '@domain'

import { Screen } from '../Screen/Screen'

type Props = {
  userId: number
}

export function ProfileTemplate({ userId }: Props) {
  const { list } = usePostList()
  const { user } = useUserGetById(userId)

  function renderListHeader() {
    if (!user) {
      return null
    }

    return (
      <Box>
        <ProfileAvatar imageURL={user?.profileUrl} />
        <Text>{user.fullName}</Text>
        <Text>{user.username}</Text>
      </Box>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <Image
        source={{ uri: item.imageURL }}
        style={{ width: 100, height: 100 }}
      />
    )
  }

  return (
    <Screen canGoBack flex={1}>
      <FlatList
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeader}
      />
    </Screen>
  )
}
