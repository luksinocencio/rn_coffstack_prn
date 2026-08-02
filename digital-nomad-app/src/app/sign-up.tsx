import { router } from 'expo-router'

import { useAuthSignUp } from '@/domain/auth/operations/useAuthSignUp'
import { Screen } from '@/ui/components/Screen'
import { Header } from '@/ui/containers/Header'
import { Logo } from '@/ui/containers/Logo'
import { SignUpForm } from '@/ui/containers/SignUpForm/SignUpForm'
import { SignUpSchema } from '@/ui/containers/SignUpForm/SignUpSchema'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUpScreen() {
  const { mutate: signUp } = useAuthSignUp({ onSuccess: router.back })

  function handleSignUp(formValues: SignUpSchema) {
    signUp({
      email: formValues.email,
      fullname: formValues.fullname,
      password: formValues.password,
    })
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Criar conta" />
        <SignUpForm onSubmit={handleSignUp} />
        <Logo />
      </SafeAreaView>
    </Screen>
  )
}
