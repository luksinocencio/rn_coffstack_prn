import React from 'react'
import { Dimensions, FlatList, Image, ListRenderItemInfo } from 'react-native'

import { Screen } from '@components'
import { AppTabScreenProps } from '@routes'
import { useCameraRoll } from '@services'

const SCREEN_WIDTH = Dimensions.get('window').width
const NUM_COLUMNS = 4
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const { list } = useCameraRoll()

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return (
      <Image
        key={item}
        source={{ uri: item }}
        style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
      />
    )
  }

  return (
    <Screen canGoBack title="Novo Post" noPaddingHorizontal>
      <FlatList numColumns={4} data={list} renderItem={renderItem} />
    </Screen>
  )
}
