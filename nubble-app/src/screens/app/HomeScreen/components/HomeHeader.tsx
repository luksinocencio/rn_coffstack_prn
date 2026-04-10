import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { LogoSimples } from '@brand'
import { Box, BoxProps, Icon, TouchableOpacityBox } from '@components'
import { useAppSafeArea } from '@hooks'

export function HomeHeader() {
  const { top } = useAppSafeArea()
  const navigation = useNavigation()

  function navigateToSearch() {
    navigation.navigate('SearchScreen')
  }

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      <LogoSimples width={70} />
      <Box flexDirection="row">
        <TouchableOpacityBox mr="s24" onPress={navigateToSearch}>
          <Icon name="search" />
        </TouchableOpacityBox>
        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="comment" />
      </Box>
    </Box>
  )
}

const $wrapper: BoxProps = {
  flexDirection: 'row',

  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
}
