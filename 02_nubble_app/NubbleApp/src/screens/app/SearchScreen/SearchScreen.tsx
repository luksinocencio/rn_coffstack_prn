import React, { useState } from 'react'

import { Icon, Screen, Text, TextInput } from '@components'
import { AppScreenProps } from '@routes'

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('')
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Text preset="headingMedium">Buscar recentes</Text>
    </Screen>
  )
}
