import React, { Fragment } from 'react'

import { ActivityIndicator, Box, Button, Text } from '@components'

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
