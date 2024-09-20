import React from 'react'
import { Dimensions, Image } from 'react-native'

import { Post } from '@domain'

type PostImagemProps = Pick<Post, 'imageURL'>

export function PostImage({ imageURL }: PostImagemProps) {
  return (
    <Image
      source={{ uri: imageURL }}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  )
}
