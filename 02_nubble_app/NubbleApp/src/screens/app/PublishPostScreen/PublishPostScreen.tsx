import React, { useState } from 'react'
import { Dimensions, Image } from 'react-native'

import { Button, Screen, Text, TextInput } from '@components'
import { AppScreenProps } from '@routes'

const IMAZE_SIZE = Dimensions.get('screen').width / 2

export function PublishPostScreen({
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('')
  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: route.params.imageUri,
        }}
        style={{
          width: IMAZE_SIZE,
          height: IMAZE_SIZE,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />
      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        placeholder="Digite aqui..."
        value={description}
        onChangeText={setDescription}
        containerProps={{ borderWidth: 0 }}
      />
      <Button mt="s56" title="Publicar post" />
    </Screen>
  )
}
