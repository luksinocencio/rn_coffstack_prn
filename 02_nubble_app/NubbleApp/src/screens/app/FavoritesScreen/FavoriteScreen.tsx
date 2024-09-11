import React from 'react'
import { Image, ListRenderItemInfo } from 'react-native'

import { InfinityScrollList, Screen, Text } from '@components'
import { PostReaction, postReactionService } from '@domain'
import { QueryKeys } from '@infra'
import { AppTabScreenProps } from '@routes'

export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  function renderItem({ item }: ListRenderItemInfo<PostReaction>) {
    return (
      <Image
        source={{ uri: item.post.imageURL }}
        style={{ width: 200, height: 200 }}
      />
    )
  }

  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: 2,
        }}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  )
}
