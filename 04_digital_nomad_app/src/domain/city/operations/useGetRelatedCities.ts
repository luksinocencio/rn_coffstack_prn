import { useFetchData } from '@/src/data/useFetchData'
import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

export function useGetReleatedCities(cityId: string) {
  const { city } = useRepository()
  return useFetchData(() => city.getRelatedCities(cityId))
}
