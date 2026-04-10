import { useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Post } from '../../Post/postTypes'
import { PostReactionBase, PostReactionType } from '../postReactionsType'
import { postReactionService } from '../postReactionService'
import type { MutationOptions } from '../../../infra/hooks/useMutation'
import { QueryKeys } from '../../../infra/infraTypes'

type Params = {
  post: Post
  postReactionType: PostReactionType
  options?: MutationOptions<PostReactionBase>
  queryKeys?: QueryKeys[]
}

export function useReactToPost({
  post,
  postReactionType,
  options,
  queryKeys,
}: Params) {
  const initialHasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReactionType,
  )

  const initialReactionCount =
    postReactionType === 'like' ? post.reactionCount : post.favoriteCount

  const [reactionState, setReactionState] = useState({
    hasReacted: initialHasReacted,
    reactionCount: initialReactionCount,
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation<PostReactionBase, Error>({
    mutationFn: () =>
      postReactionService.reactToPost(post.id, postReactionType),
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey })
        })
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message)
      }
      toogleReactionState()
    },
  })

  function reactToPost() {
    toogleReactionState()
    mutate()
  }

  function toogleReactionState() {
    setReactionState(prev => ({
      hasReacted: !prev.hasReacted,
      reactionCount: prev.hasReacted
        ? prev.reactionCount - 1
        : prev.reactionCount + 1,
    }))
  }

  return {
    hasReacted: reactionState.hasReacted,
    reactionCount: reactionState.reactionCount,
    reactToPost,
  }
}
