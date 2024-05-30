import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box, ProfileUser, Text } from '@components'
import { User } from '@domain'
import { useSearchHistory } from '@services'

export function SearchHistory() {
  const userList = useSearchHistory()

  function renderListHeader() {
    return <Text preset="headingMedium">Buscar recentes</Text>
  }

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />
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
