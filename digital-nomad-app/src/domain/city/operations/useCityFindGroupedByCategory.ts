import { useAppQuery } from '@/infra/operations/useAppQuery'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useCityFindGroupedByCategory() {
  const { city } = useRepository()

  return useAppQuery({
    queryKey: ['city', 'category-grouped'],
    fetchData: () => city.findGroupedByCategory(),
  })
}
