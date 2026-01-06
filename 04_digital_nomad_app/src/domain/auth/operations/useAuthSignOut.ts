import { useAuth } from '@/src/domain/auth/AuthContext'
import { useAppMutation } from '@/src/infra/operations/useAppMutation'
import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

export function useAuthSignOut() {
  const { auth } = useRepository()
  const { removeAuthUser } = useAuth()

  return useAppMutation({
    mutateFn: () => auth.signOut(),
    onSuccess: () => {
      removeAuthUser()
    },
  })
}
