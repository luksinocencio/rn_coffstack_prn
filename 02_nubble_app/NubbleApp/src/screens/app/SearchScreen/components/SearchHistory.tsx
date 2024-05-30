import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box, ProfileUser, Text } from '@components'
import { User } from '@domain'
import { useSearchHistory, useSearchHistoryService } from '@services'

export function SearchHistory() {
  const userList = useSearchHistory()
  const { addUser } = useSearchHistoryService()

  function renderListHeader() {
    return <Text preset="headingMedium">Buscar recentes</Text>
  }

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return <ProfileUser onPress={() => addUser(item)} user={item} />
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
