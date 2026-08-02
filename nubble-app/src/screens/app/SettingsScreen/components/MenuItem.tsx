import React from 'react'

import { Icon } from '../../../../components/Icon/Icon'
import { PressableBox } from '../../../../components/Box/Box'
import { Text } from '../../../../components/Text/Text'

export type MenuItemProps = {
  label: string
  onPress: () => void
}

export function MenuItem({ label, onPress }: MenuItemProps) {
  return (
    <PressableBox
      onPress={onPress}
      flexDirection="row"
      alignItems={'center'}
      paddingVertical="s16"
      justifyContent="space-between">
      <Text preset="paragraphMedium" semiBold>
        {label}
      </Text>
      <Icon name="chevronRight" />
    </PressableBox>
  )
}
