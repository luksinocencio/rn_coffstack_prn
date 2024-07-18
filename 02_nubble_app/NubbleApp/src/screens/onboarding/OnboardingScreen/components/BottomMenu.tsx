import React from 'react'

import { Box, Icon, Text } from '@components'

export function BottomMenu() {
  return (
    <Box flexDirection="row" justifyContent="space-between" padding="s16">
      <Text>Pular</Text>
      <Box flexDirection="row" alignItems="center">
        <Text mr="s4">Próximos</Text>
        <Icon name="arrowRight" />
      </Box>
    </Box>
  )
}
