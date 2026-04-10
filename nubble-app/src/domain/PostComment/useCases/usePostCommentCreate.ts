import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { PostComment } from '../postCommentTypes'
import { postCommentService } from '../postCommentService'
import type { MutationOptions } from '../../../infra/hooks/useMutation'
import { QueryKeys } from '../../../infra/infraTypes'

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient()
  const { mutate, isLoading, isError } = useMutation<
    PostComment,
    unknown,
    { message: string }
  >({
    mutationFn: ({ message }) => postCommentService.create(postId, message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      })
      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Erro ao criar comentário')
      }
    },
  })

  async function createComment(message: string) {
    await mutate({ message })
  }

  return {
    createComment,
    isLoading,
    isError,
  }
}
