import React from 'react'
import { Dimensions, Image, ListRenderItemInfo } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { InfinityScrollList, PressableBox, Screen, Text } from '@components'
import { PostReaction, postReactionService } from '@domain'
import { QueryKeys } from '@infra'
import { AppTabScreenProps } from '@routes'

const NUM_COLUMNS = 2
const SCREEN_WITDH = Dimensions.get('window').width
const SCREEN_PADDING = 24
const ITEM_MARGIN = 16
const ITEM_WITH =
  (SCREEN_WITDH - SCREEN_PADDING * 2 - ITEM_MARGIN) / NUM_COLUMNS

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  const navigation = useNavigation()

  function renderItem({ item }: ListRenderItemInfo<PostReaction>) {
    return (
      <PressableBox
        onPress={() =>
          navigation.navigate('PostCommentScreen', {
            postId: item.post.id,
            postAuthorId: item.author.id,
            showPost: true,
          })
        }>
        <Image
          source={{ uri: item.post.imageURL }}
          style={{ width: ITEM_WITH, height: ITEM_WITH }}
        />
        <Text preset="paragraphSmall" semiBold mt="s4">
          {item.author.username}
        </Text>
      </PressableBox>
    )
  }

  return (
    <Screen title="Favoritos">
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {
            columnGap: ITEM_MARGIN,
          },
          contentContainerStyle: {
            rowGap: SCREEN_PADDING,
          },
        }}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  )
}
