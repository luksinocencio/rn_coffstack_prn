import { useAppQuery } from '@/infra/operations/useAppQuery'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useCityFindById(id: string) {
  const { city } = useRepository()
  return useAppQuery({
    queryKey: ['city', id],
    fetchData: () => city.findById(id),
  })
}