import React from 'react'

import { Box, ProfileAvatar, Text } from '@components'
import { Post } from '@domain'

type PostHeaderProps = Pick<Post, 'author'>

export function PostHeader({ author }: PostHeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text preset="paragraphMedium" medium ml="s12">
        {author.userName}
      </Text>
    </Box>
  )
}
