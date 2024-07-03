import React from 'react'
import { Alert, FlatList, ListRenderItemInfo } from 'react-native'

import { Button, Screen, Separator } from '@components'
import { useAuthSignOut } from '@domain'
import { AppScreenProps } from '@routes'

import { MenuItem, MenuItemProps } from './components/MenuItem.tsx'

export function SettingsScreen({
  navigation,
}: AppScreenProps<'SettingsScreen'>) {
  const { isLoading, signOut } = useAuthSignOut()

  function handleSignOut() {
    Alert.alert('Sair da conta', 'Deseja realmente sair da conta?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sair',
        onPress: signOut,
      },
    ])
  }

  const items: MenuItemProps[] = [
    {
      label: 'Termos de uso',
      onPress: () => console.log('Termos de uso'),
    },
    {
      label: 'Política de privacidade',
      onPress: () => console.log('Política de privacidade'),
    },
    {
      label: 'Alterar tema',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ]

  function renderItem({ item }: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />
  }

  return (
    <Screen canGoBack title="Configurações">
      <FlatList
        data={items}
        renderItem={renderItem}
        bounces={false}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            mt="s48"
            title="Sair da conta"
            loading={isLoading}
            onPress={handleSignOut}
          />
        }
      />
    </Screen>
  )
}
