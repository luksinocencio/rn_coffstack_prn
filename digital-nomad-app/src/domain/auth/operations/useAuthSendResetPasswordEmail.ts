import { useFeedbackService } from '@/infra/feedbackService/FeedbackProvider'
import { useAppMutation, UseAppMutationOptions } from '@/infra/operations/useAppMutation'
import { useRepository } from '@/infra/repositories/RepositoryProvider'

export function useAuthSendResetPasswordEmail(options?: UseAppMutationOptions<void>) {
  const { auth } = useRepository()
  const feedbackService = useFeedbackService()

  return useAppMutation<void, { email: string }>({
    mutationFn: ({ email }) => auth.sendResetPasswordEmail(email),
    onSuccess: () => {
      options?.onSuccess?.()
      feedbackService.send({
        type: 'success',
        message: `verifique sua caixa de e-mail`,
      })
    },
    onError: error => {
      options?.onError?.(error)
      feedbackService.send({ type: 'error', message: 'error on sign' })
    },
  })
}
