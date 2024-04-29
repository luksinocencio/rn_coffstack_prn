import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PostComment, postCommentService } from '@domain'
import { MutationOptions, QueryKeys } from '@infra'

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
