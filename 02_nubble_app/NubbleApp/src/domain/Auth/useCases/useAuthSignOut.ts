import { useMutation } from '@tanstack/react-query'

import { useAuthCredentials } from '@services'

import { authService } from '../authService'

export function useAuthSignOut() {
  const { removeCredentils } = useAuthCredentials()
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      authService.removeToken()
      removeCredentils()
    },
  })

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  }
}
