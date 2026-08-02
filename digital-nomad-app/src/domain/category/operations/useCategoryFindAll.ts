import { useAppQuery } from '@/infra/operations/useAppQuery'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useCategoryFindAll() {
  const { category } = useRepository()

  return useAppQuery({
    queryKey: ['category'],
    fetchData: () => category.findAll(),
  })
}