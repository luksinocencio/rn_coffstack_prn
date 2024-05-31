import React from 'react'
import { Image } from 'react-native'

import { Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'
import { useCameraRoll } from '@services'

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const { list } = useCameraRoll()
  return (
    <Screen scrollable>
      <Text preset="headingLarge">New Post Screen</Text>
      {list.map(photo => (
        <Image
          source={{ uri: photo }}
          key={photo}
          style={{ width: 200, height: 200 }}
        />
      ))}
    </Screen>
  )
}
