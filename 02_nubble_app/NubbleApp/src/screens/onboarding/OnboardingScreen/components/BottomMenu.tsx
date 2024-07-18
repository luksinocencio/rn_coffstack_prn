import React from 'react'

import { Box, Icon, PressableBox, Text } from '@components'

import { OnboardingPageProps } from './OnboardingPage'

type BottomMenuProps = Pick<OnboardingPageProps, 'onPressSkip' | 'onPressNext'>

export function BottomMenu({ onPressNext, onPressSkip }: BottomMenuProps) {
  return (
    <Box flexDirection="row" justifyContent="space-between" padding="s16">
      <PressableBox onPress={onPressSkip} hitSlop={10}>
        <Text>Pular</Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Text mr="s4">Próximos</Text>
        <Icon name="arrowRight" />
      </PressableBox>
    </Box>
  )
}
