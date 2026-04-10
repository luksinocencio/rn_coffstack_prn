import { useMutation } from '@tanstack/react-query'

import { useAuthCredentials, useSearchHistoryService } from '@services'

import { authService } from '../authService'

export function useAuthSignOut() {
  const { removeCredentials } = useAuthCredentials()
  const { clearUserList } = useSearchHistoryService()
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      removeCredentials()
      clearUserList()
    },
  })

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  }
}
