import React from 'react'
import { Alert } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components'
import { AuthScreenProps } from '@routes'

import { SignInSchema, signInSchema } from './signInSchema'

export function SingInScreen({ navigation }: AuthScreenProps<'SignInScreen'>) {
  const { control, formState, handleSubmit } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function submitForm({ email, password }: SignInSchema) {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`)
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }
  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />

      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  )
}
