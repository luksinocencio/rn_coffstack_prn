import React from 'react';

import { Box } from '@components';
import { Post } from '@domain';

import { PostHeader } from './components/PostHeader';
import { PostImagem } from './components/PostImagem';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />
      <PostImagem imageURL={post.imageURL} />
    </Box>
  );
}
