import React from 'react';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';
import { Post } from '@domain';

type PostActionsProps = Pick<
  Post,
  'commentCount' | 'favoriteCount' | 'reactionCount'
>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  function likePost() {
    console.log('liked was pressed');
  }

  function navigateToComments() {
    console.log('comment was pressed');
  }

  function favoritePost() {
    console.log('favorite was pressed');
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        marked={true}
        iconName={{ default: 'heart', marked: 'heartFill' }}
        text={reactionCount}
      />
      <Item
        onPress={navigateToComments}
        marked={false}
        iconName={{ default: 'comment', marked: 'comment' }}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        marked={false}
        iconName={{ default: 'bookmark', marked: 'bookmarkFill' }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  iconName: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({ onPress, text, iconName, marked }: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? iconName.marked : iconName.default}
      />
      {text > 0 ? (
        <Text preset="paragraphSmall" ml="s4">
          {text}
        </Text>
      ) : null}
    </TouchableOpacityBox>
  );
}
