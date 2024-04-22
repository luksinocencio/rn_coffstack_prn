import React from 'react';

import { Box } from '@components';
import { Post } from '@domain';

import { PostActions } from './components/PostActions';
import { PostBottom } from './components/PostBottom';
import { PostHeader } from './components/PostHeader';
import { PostImagem } from './components/PostImagem';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImagem imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        text={post.text}
        author={post.author}
        commentCount={post.commentCount}
      />
    </Box>
  );
}
