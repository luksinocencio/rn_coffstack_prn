import { Post, postService, usePaginatedList } from '@domain'

/**
 * Hook para buscar a lista de posts
 * @description Camada de aplicacção: onde escreveremos os casos de uso. Integração de múltiplos services, para executar uma tarefa.
 * @alias usePostList
 * @example const { postList, loading, error, fetchData, fetchNextPage } = usePostList()
 */

export function usePostList() {
  return usePaginatedList<Post>(postService.getList)
}
