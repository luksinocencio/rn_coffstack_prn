import React from 'react';

import { Box, Text, TouchableOpacityBox } from '@components';
import { Post } from '@domain';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({ author, text, commentCount }: PostBottomProps) {
  const commentText = getCommentText(commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" medium>
        {author.name}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <TouchableOpacityBox mt="s8">
        {commentText ? (
          <Text preset="paragraphSmall" color="primary" bold>
            {commentText}
          </Text>
        ) : null}
      </TouchableOpacityBox>
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  switch (commentCount) {
    case 0:
      return null;
    case 1:
      return 'ver comentário';
    default:
      return `ver ${commentCount} comentários`;
  }
}
