import React from 'react'
import { Linking } from 'react-native'

import type { PermissionName } from '../../services/permission/permissionTypes'
import { usePermission } from '../../services/permission/usePermission'

import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Screen } from '../Screen/Screen'
import { Text, TextProps } from '../Text/Text'

interface PermissionManagerProps {
  permissionName: PermissionName
  description: string
  canGoBack?: boolean
  children: React.ReactElement
}

export function PermissionManager({
  permissionName,
  description,
  canGoBack = true,
  children,
}: PermissionManagerProps) {
  const { status, isLoading, requestPermission } = usePermission(permissionName)

  if (status === 'granted') {
    return children
  }

  // `status` só é `undefined` antes da primeira verificação terminar.
  const isChecking = status === undefined

  return (
    <Screen flex={1} canGoBack={canGoBack}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="headingSmall" textAlign="center">
          {description}
        </Text>

        {(isLoading || isChecking) && (
          <Box mt="s16">
            <ActivityIndicator color="primary" />
          </Box>
        )}

        {!isLoading && status === 'denied' && (
          <Button
            title="Permitir acesso"
            onPress={requestPermission}
            mt="s16"
          />
        )}

        {!isLoading && status === 'never_ask_again' && (
          <Box>
            <Text {...$messageStyle}>
              O acesso foi bloqueado. Libere a permissão nas configurações do
              dispositivo para continuar.
            </Text>
            <Button
              title="Abrir Configurações"
              onPress={Linking.openSettings}
            />
          </Box>
        )}

        {!isLoading && status === 'unavailable' && (
          <Text {...$messageStyle}>
            Esse recurso não está disponível para esse dispositivo
          </Text>
        )}
      </Box>
    </Screen>
  )
}

const $messageStyle: TextProps = {
  preset: 'paragraphMedium',
  color: 'error',
  bold: true,
  marginVertical: 's16',
  textAlign: 'center',
}
