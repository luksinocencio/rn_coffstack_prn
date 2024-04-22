import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { PostItem, Screen } from '@components';
import { Post, postService } from '@domain';
import { AppTabScreenProps } from '@routes';

import { HomeHeader } from './components/HeaderHome';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>();

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  });

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
