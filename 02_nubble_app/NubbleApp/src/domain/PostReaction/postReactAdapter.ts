import { PostAPI, UserAPI } from '@domain'

import { PostReactionAPI } from './postReactionsType.ts'

function toPostReaction(postReactionAPI: PostReactionAPI): {
  createdAt: string
  emojiType: 'favorite' | 'like'
  post: Pick<PostAPI, 'id' | 'text' | 'image_url' | 'status'>
  author: UserAPI
  id: number
  postId: number
  userId: number
  isChecked: true
  updatedAt: string
} {
  return {
    id: postReactionAPI.id,
    postId: postReactionAPI.post_id,
    userId: postReactionAPI.user_id,
    emojiType: postReactionAPI.emoji_type,
    createdAt: postReactionAPI.created_at,
    updatedAt: postReactionAPI.updated_at,
    isChecked: postReactionAPI.is_checked,
    author: postReactionAPI.user,
    post: postReactionAPI.post,
  }
}

export const postReactionAdapter = {
  toPostReaction,
}
