import { useAppQuery } from '@/infra/operations/useAppQuery'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useGetRelatedCities(id: string) {
  const { city } = useRepository()
  return useAppQuery({
    queryKey: ['city', 'related', id],
    fetchData: () => city.getRelatedCities(id),
  })
}