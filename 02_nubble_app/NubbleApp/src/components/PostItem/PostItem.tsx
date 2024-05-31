import React from 'react'

import { Box, ProfileUser } from '@components'
import { Post } from '@domain'

import { PostActions } from './components/PostActions'
import { PostBottom } from './components/PostBottom'
import { PostImagem } from './components/PostImagem'

interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          profileUrl: post.author.profileURL,
          username: post.author.userName,
        }}
      />
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
        id={post.id}
      />
    </Box>
  )
}
