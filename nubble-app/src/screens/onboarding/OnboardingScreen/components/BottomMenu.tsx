import React from 'react'

import { Box, PressableBox } from '../../../../components/Box/Box'
import { Icon } from '../../../../components/Icon/Icon'
import { Text } from '../../../../components/Text/Text'

import { OnboardingPageProps } from './OnboardingPage'

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressSkip' | 'onPressNext'
> & {
  isLast: boolean
}

export function BottomMenu({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) {
  const nextText = isLast ? 'Começar' : 'Próximo'

  return (
    <Box flexDirection="row" justifyContent="space-between" padding="s16">
      <PressableBox onPress={onPressSkip} hitSlop={10}>
        <Text semiBold color="gray2">
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Text bold mr="s4">
          {nextText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  )
}
