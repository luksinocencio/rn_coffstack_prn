import React, { useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native'

import { Screen } from '@components'
import { AppTabScreenProps } from '@routes'
import { useCameraRoll } from '@services'

import { Header } from './components/Header'

const SCREEN_WIDTH = Dimensions.get('screen').width
const NUM_COLUMNS = 4
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState<string>()
  const { photoList, fetchNextPage } = useCameraRoll(true, setSelectedImage)
  const flatListRef = useRef<FlatList>(null)

  function onSelecteImage(imageUri: string) {
    setSelectedImage(imageUri)
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })
  }

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelecteImage(item)}>
        <Image
          key={item}
          source={{ uri: item }}
          style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
        />
      </Pressable>
    )
  }

  return (
    <Screen canGoBack title="Novo Post" noPaddingHorizontal>
      <FlatList
        ref={flatListRef}
        numColumns={4}
        data={photoList}
        renderItem={renderItem}
        ListHeaderComponent={
          <Header imageUri={selectedImage} imageWidth={SCREEN_WIDTH} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  )
}
