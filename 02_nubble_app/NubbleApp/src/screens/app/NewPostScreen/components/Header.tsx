import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps, Button, Icon, Text } from '@components'

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

  return (
    <Box>
      <ImageBackground
        source={{ uri: imageUri }}
        style={[
          styles.imageBackground,
          {
            width: imageWidth,
            height: imageWidth,
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
        <Icon name="camera" />
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
