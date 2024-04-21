import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostItem, Screen } from '@components';
import { Post, postService } from '@domain';
import { AppTabScreenProps } from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>();

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  });

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
}
