import React from 'react'
import { Alert } from 'react-native'

import { Button, Screen } from '@components'
import { useAuthSignOut } from '@domain'
import { AppScreenProps } from '@routes'

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
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

  return (
    <Screen canGoBack title="Configurações">
      <Button
        title="Sair da conta"
        loading={isLoading}
        onPress={handleSignOut}
      />
    </Screen>
  )
}
