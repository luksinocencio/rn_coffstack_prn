import React from 'react'

import { Box, ProfileAvatar, Text } from '@components'
import { PostComment } from '@domain'

interface PostCommentItemProps {
  postComment: PostComment
}

export function PostCommentItem({ postComment }: PostCommentItemProps) {
  return (
    <Box flexDirection="row" mb="s16" alignItems="center">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12" flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text color="gray1" preset="paragraphSmall">
          {postComment.message} - {postComment.createdAtRelative}
        </Text>
      </Box>
    </Box>
  )
}
