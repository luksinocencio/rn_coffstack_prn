import { useEffect, useState } from 'react'

import { postService } from '@domain'

import { Post } from '../postTypes'

/**
 * Hook para buscar a lista de posts
 * @description Camada de aplicacção: onde escreveremos os casos de uso. Integração de múltiplos services, para executar uma tarefa.
 * @alias usePostList
 * @returns {postList, error, loading, fetchData}
 * @example const { postList, loading, error, fetchData } = usePostList()
 */

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>()
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  async function fetchData() {
    try {
      setError(null)
      setLoading(true)
      const list = await postService.getList()
      setPostList(list)
    } catch (er: any) {
      console.log(er)
      setError(er)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { postList, error, loading, fetchData }
}
