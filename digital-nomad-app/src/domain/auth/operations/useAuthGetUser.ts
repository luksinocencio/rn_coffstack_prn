import { useAppQuery } from '@/infra/operations/useAppQuery'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useAuthGetUser() {
  const { auth } = useRepository()

  return useAppQuery({
    queryKey: ['user'],
    fetchData: () => auth.getUser(),
  })
}