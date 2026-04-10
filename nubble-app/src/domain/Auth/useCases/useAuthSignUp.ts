import { useMutation } from '@tanstack/react-query'

import type { MutationOptions } from '../../../infra/hooks/useMutation'

import { authService } from '../authService'
import { SignUpData } from '../authTypes'

export function useAuthSignUp(options?: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess()
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message)
      }
    },
  })

  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData)
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  }
}
