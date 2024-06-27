import React, { useState } from 'react'
import { Dimensions, Image } from 'react-native'

import { Button, Screen, Text, TextInput } from '@components'
import { usePostCreate } from '@domain'
import { AppScreenProps } from '@routes'
import { useToastService } from '@services'

const IMAGE_SIZE = Dimensions.get('screen').width / 2

export function PublishPostScreen({
  route,
  navigation,
}: AppScreenProps<'PublishPostScreen'>) {
  const imageUri = route.params.imageUri
  const [description, setDescription] = useState('')

  const { showToast } = useToastService()

  const { createPost, isLoading } = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', { screen: 'HomeScreen' })
      showToast({ message: 'Foto publicada!', type: 'success' })
    },
  })

  function publishPost() {
    createPost({ description, imageUri })
  }

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: imageUri,
        }}
        style={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui..."
        containerProps={{ borderWidth: 0 }}
      />
      <Button
        mt="s56"
        title="Publicar post"
        onPress={publishPost}
        loading={isLoading}
        disabled={description.length < 1}
      />
    </Screen>
  )
}
