import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Box, Icon, ScreenProps, Text, TouchableOpacityBox } from '@components'

type ScreenHeaderProps = Pick<ScreenProps, 'canGoBack' | 'title'>

const ICON_SIZE = 20

export function ScreenHeader({ canGoBack, title }: ScreenHeaderProps) {
  const navigation = useNavigation()

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
        </TouchableOpacityBox>
      )}
      {!title && (
        <Text preset="paragraphMedium" medium ml="s8" color="primary">
          Voltar
        </Text>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  )
}
