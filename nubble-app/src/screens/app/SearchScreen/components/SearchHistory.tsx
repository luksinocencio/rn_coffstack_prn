import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box, Icon, ProfileUser, Text } from '@components'
import { User } from '@domain'
import { useSearchHistory, useSearchHistoryService } from '@services'

export function SearchHistory() {
  const userList = useSearchHistory()
  const { removeUser } = useSearchHistoryService()

  function renderListHeader() {
    return (
      <Text mb="s16" preset="headingMedium">
        Buscas recentes
      </Text>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        avatarProps={{ size: 48 }}
        RightComponent={
          <Icon
            color="primary"
            name="trash"
            onPress={() => removeUser(item.id)}
          />
        }
      />
    )
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={renderListHeader}
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  )
}
