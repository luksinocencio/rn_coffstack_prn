import React, { Fragment } from 'react'

import { ActivityIndicator } from '../../../../components/ActivityIndicator/ActivityIndicator'
import { Box } from '../../../../components/Box/Box'
import { Button } from '../../../../components/Button/Button'
import { Text } from '../../../../components/Text/Text'

interface Props {
  loading: boolean
  error: unknown
  refetch: () => void
}

export function HomeEmpty({ loading, error, refetch }: Props) {
  let component = (
    <Text preset="paragraphMedium">Não há publicações no seu feed</Text>
  )

  if (loading) {
    component = <ActivityIndicator color="primary" />
  }

  if (error) {
    component = (
      <Fragment>
        <Text preset="paragraphMedium" mb="s16">
          Não foi possível carregar o feed 😢
        </Text>
        <Button title="Recarregar" onPress={refetch} preset="outline" />
      </Fragment>
    )
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {component}
    </Box>
  )
}
