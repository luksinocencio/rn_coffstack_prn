import { useAppQuery } from '@/infra/operations/useAppQuery'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useFindAllFavorites() {
  const { city } = useRepository()

  return useAppQuery({
    queryKey: ['city', 'favorite'],
    fetchData: () => city.findAllFavorites(),
  })
}
