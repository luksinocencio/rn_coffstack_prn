import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { MutationOptions } from '../../../infra/hooks/useMutation'
import { QueryKeys } from '../../../infra/infraTypes'
import type { ImageForUpload } from '../../../services/multimedia/multimediaType'
import { multimediaService } from '../../../services/multimedia/multimediaService'

import { postService } from '../postService'
import { Post } from '../postTypes'

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient()

  const { mutate, isPending: isLoading, isError } = useMutation<
    Post,
    Error,
    { text: string; imageCover: ImageForUpload }
  >({
    mutationFn: ({ text, imageCover }) =>
      postService.createPost(text, imageCover),
    onSuccess: post => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.PostList] })
      if (options?.onSuccess) {
        options.onSuccess(post)
      }
    },
    onError: error => {
      if (options?.onError) {
        // Repassa a mensagem real: o erro pode vir da request ou do adapter, e
        // engolir isso num texto genérico esconde falha depois do upload.
        options.onError(
          error?.message || options?.errorMessage || 'erro ao criar post',
        )
      }
    },
  })

  async function createPost({
    description,
    imageUri,
  }: {
    description: string
    imageUri: string
  }) {
    const imageCover = await multimediaService.prepareImageForUpload(imageUri)
    mutate({ text: description, imageCover })
  }

  return {
    isLoading,
    isError,
    createPost,
  }
}
