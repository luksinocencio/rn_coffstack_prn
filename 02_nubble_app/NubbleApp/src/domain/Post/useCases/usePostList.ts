import { useEffect, useState } from 'react'

import { postService } from '@domain'

import { Post } from '../postTypes'

/**
 * Hook para buscar a lista de posts
 * @description Camada de aplicacção: onde escreveremos os casos de uso. Integração de múltiplos services, para executar uma tarefa.
 * @alias usePostList
 * @returns {error, postList, loading, fetchData, fetchNextPage}
 * @example const { postList, loading, error, fetchData, fetchNextPage } = usePostList()
 */

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [page, setPage] = useState<number>(1)

  async function fetchData() {
    try {
      setError(null)
      setLoading(true)
      const list = await postService.getList(page)
      setPostList(prev => [...prev, ...list])
      setPage(prev => prev + 1)
    } catch (er: any) {
      console.log(er)
      setError(er)
    } finally {
      setLoading(false)
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData()
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { postList, error, loading, fetchData, fetchNextPage }
}
