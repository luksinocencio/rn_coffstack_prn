import { Button } from '@/ui/components/Button'
import { Screen } from '@/ui/components/Screen'
import { Text } from '@/ui/components/Text'
import { TextInput } from '@/ui/components/TextInput'
import { Header } from '@/ui/containers/Header'
import { Logo } from '@/ui/containers/Logo'
import { TextLink } from '@/ui/containers/TextLink'
import { router } from 'expo-router'
import { useState } from 'react'

import { useAuthSendResetPasswordEmail } from '@/domain/auth/operations/useAuthSendResetPasswordEmail'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('')
  const { mutate: sendResetEmail } = useAuthSendResetPasswordEmail({
    onSuccess: router.back,
  })

  function handleResetPassword() {
    sendResetEmail({ email })
  }

  return (
    <Screen>
      <SafeAreaView>
        <Header title="Recuperar Senha" />
        <Text mb="s16">
          Digite o endereço de e-mail associado à sua conta e enviaremos instruções para redefinir sua senha
        </Text>
        <TextInput label="E-mail" autoCapitalize="none" value={email} onChangeText={setEmail} placeholder="seu email" />
        <Button title="Enviar link" onPress={handleResetPassword} />

        <TextLink goBackOnPress text="Lembrou sua senha?" ctaText="Voltar para o login" />
        <Logo />
      </SafeAreaView>
    </Screen>
  )
}
