import { UseFormGetFieldState, UseFormWatch } from 'react-hook-form'

import { useAuthIsEmailAvailable, useAuthIsUsernameAvailable } from '@domain'

import { SignUpSchema } from './signUpSchema'

type Props = {
  watch: UseFormWatch<SignUpSchema>
  getFieldState: UseFormGetFieldState<SignUpSchema>
}

type ReturnValues = {
  errorMessage?: string
  notReaty: boolean
  isFetching: boolean
}

export function useAsyncValidation({ watch, getFieldState }: Props): {
  usernameValidation: ReturnValues
  emailValidation: ReturnValues
} {
  const username = watch('username')
  const usernameState = getFieldState('username')
  const usernameIsValid = !usernameState.invalid && !usernameState.isDirty
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  })

  const email = watch('email')
  const emailState = getFieldState('email')
  const emailIsValid = !emailState.invalid && !emailState.isDirty
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  })

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      notReaty: usernameQuery.isFetching || usernameQuery.isUnavailable,
      isFetching: usernameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'e-mail indisponível'
        : undefined,
      notReaty: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  }
}
