import { Screen } from '@/ui/components/Screen'
import { Header } from '@/ui/containers/Header'
import { UpdatePasswordForm } from '@/ui/containers/UpdatePasswordForm/UpdatePasswordForm'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthUpdatePassword } from '@/domain/auth/operations/useAuthUpdatePassword'
import { router } from 'expo-router'
import { UpdatePasswordSchema } from '@/ui/containers/UpdatePasswordForm/UpdatePasswordSchema'

export default function UpdatePasswordScreen() {
  const { mutate: updatePassword } = useAuthUpdatePassword({
    onSuccess: () => {
      router.back()
    },
  })

  function handleUpdatePassword(data: UpdatePasswordSchema) {
    updatePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    })
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar Senha" />
        <UpdatePasswordForm onSubmit={handleUpdatePassword} />
      </SafeAreaView>
    </Screen>
  )
}