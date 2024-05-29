import React, { useState } from 'react'

import { Icon, Screen, Text, TextInput } from '@components'
import { useUserSearch } from '@domain'
import { useDebounce } from '@hooks'
import { AppScreenProps } from '@routes'

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const { list } = useUserSearch(debouncedSearch)

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
      {list.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  )
}
