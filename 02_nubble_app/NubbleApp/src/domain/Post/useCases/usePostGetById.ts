import { useQuery } from '@tanstack/react-query'

import { postService } from '@domain'
import { QueryKeys } from '@infra'

export function usePostGetById(id: number) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: [QueryKeys.PostGetById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30, // 30 seconds
  })

  return {
    post: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  }
}
