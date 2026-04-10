import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ActivityIndicator } from '../../../components/ActivityIndicator/ActivityIndicator'
import { Button } from '../../../components/Button/Button'
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput'
import { FormTextInput } from '../../../components/Form/FormTextInput'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { useAuthSignUp } from '../../../domain/Auth/useCases/useAuthSignUp'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import type { AuthScreenProps } from '../../../routes/navigationType'
import type { AuthStackParamList } from '../../../routes/AuthStack'

import { signUpSchema, SignUpSchema } from './signUpSchema'
import { useAsyncValidation } from './useAsyncValidation'

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
}

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSuccess()
  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam)
    },
  })

  const { control, formState, handleSubmit, watch, getFieldState } =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    })
  function submitForm(formValues: SignUpSchema) {
    signUp(formValues)
  }

  const { usernameValidation, emailValidation } = useAsyncValidation({
    watch,
    getFieldState,
  })

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{ mb: 's20' }}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
        errorMessage={emailValidation.errorMessage}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  )
}
