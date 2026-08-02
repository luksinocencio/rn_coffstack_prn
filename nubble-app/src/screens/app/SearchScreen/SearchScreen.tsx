import React, { useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Icon } from '../../../components/Icon/Icon'
import { ProfileUser } from '../../../components/ProfileUser/ProfileUser'
import { Screen } from '../../../components/Screen/Screen'
import { TextInput } from '../../../components/TextInput/TextInput'
import type { User } from '../../../domain/User/userTypes'
import { useUserSearch } from '../../../domain/User/useCases/useUserSearch'
import { useDebounce } from '../../../hooks/useDebounce'
import type { AppScreenProps } from '../../../routes/navigationType'
import { useSearchHistoryService } from '../../../services/searchHistory/useSearchHistory'

import { SearchHistory } from './components/SearchHistory'

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const { addUser } = useSearchHistoryService()

  const { list } = useUserSearch(debouncedSearch)

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        onPress={() => addUser(item)}
        user={item}
        avatarProps={{ size: 48 }}
      />
    )
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
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.username}
        />
      )}
    </Screen>
  )
}
