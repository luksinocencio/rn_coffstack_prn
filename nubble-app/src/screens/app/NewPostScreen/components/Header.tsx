import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import { images } from '../../../../assets'
import { useNavigation } from '@react-navigation/native'

import { Box } from '../../../../components/Box/Box'
import type { BoxProps } from '../../../../components/Box/Box'
import { Button } from '../../../../components/Button/Button'
import { Icon } from '../../../../components/Icon/Icon'
import { Text } from '../../../../components/Text/Text'

interface Props {
  imageUri?: string
  imageWidth: number
}

export function Header({ imageUri, imageWidth }: Props) {
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
          {
            width: imageWidth,
            height: imageWidth,
          },
          styles.imageBackground,
        ]}>
        {Boolean(imageUri) && (
          <Button
            onPress={navigateToPublishPost}
            preset="ghost"
            title="Escolher essa"
            mb="s24"
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

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
}

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
