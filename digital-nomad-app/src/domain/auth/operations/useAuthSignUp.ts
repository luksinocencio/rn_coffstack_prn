import { useFeedbackService } from '@/infra/feedbackService/FeedbackProvider'
import { useAppMutation, UseAppMutationOptions } from '@/infra/operations/useAppMutation'
import { useRepository } from '@/infra/repositories/RepositoryProvider'
import { AuthSignUpParams } from '../IAuthRepo'

export function useAuthSignUp(options?: UseAppMutationOptions<void>) {
  const { auth } = useRepository()
  const feedbackService = useFeedbackService()

  return useAppMutation<void, AuthSignUpParams>({
    mutationFn: (params) => auth.signUp(params),
    onSuccess: () => {
      options?.onSuccess?.()
      feedbackService.send({
        type: 'success',
        message: `cadastro feito com sucesso`,
      })
    },
    onError: error => {
      options?.onError?.(error)
      feedbackService.send({ type: 'error', message: 'erro ao cadastras' })
    },
  })
}
