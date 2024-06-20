import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import { images } from '@assets'
import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps, Button, Icon, Text } from '@components'

interface Props {
  imageUri?: string
  imageSize: number
}

export function Header({ imageUri, imageSize }: Props) {
  const navigation = useNavigation()

  function navigateToPublishPost() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', { imageUri })
    }
  }

  function navigateToCamera() {
    navigation.navigate('CameraScreen')
  }

  return (
    <Box>
      <ImageBackground
        source={imageUri ? { uri: imageUri } : images.imagePlaceholder}
        style={[
          styles.imageBackground,
          {
            width: imageSize,
            height: imageSize,
          },
        ]}>
        {Boolean(imageUri) && (
          <Button
            title="Escolher essa"
            mb="s24"
            preset="ghost"
            onPress={navigateToPublishPost}
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" onPress={navigateToCamera} />
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
}
