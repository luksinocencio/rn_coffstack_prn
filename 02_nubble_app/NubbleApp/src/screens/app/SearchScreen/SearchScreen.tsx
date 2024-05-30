import React, { useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Icon, ProfileUser, Screen, Text, TextInput } from '@components'
import { User, useUserSearch } from '@domain'
import { useDebounce } from '@hooks'
import { AppScreenProps } from '@routes'
import { useSearchHistoryService } from '@services'

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const { addUser } = useSearchHistoryService()

  const { list } = useUserSearch(debouncedSearch)

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite para buscar"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Text preset="headingMedium">Buscar recentes</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </Screen>
  )
}
