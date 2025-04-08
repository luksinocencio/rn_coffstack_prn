import { useMutation } from '@tanstack/react-query'

import { MutationOptions } from '@infra'

import { authService } from '../'

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const { mutate, isLoading } = useMutation<string, Error, string>({
    mutationFn: email => authService.requestNewPassword(email),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message)
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options?.onSuccess(message)
      }
    },
  })

  return {
    isLoading,
    requestNewPassword: (email: string) => mutate(email),
  }
}
