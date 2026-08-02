import { Screen } from '@/ui/components/Screen'
import { Text } from '@/ui/components/Text'
import { Header } from '@/ui/containers/Header'
import { UpdateProfileForm } from '@/ui/containers/UpdateProfileForm/UpdateProfileForm'
import { router, useLocalSearchParams } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthUpdateProfile } from '@/domain/auth/operations/useAuthUpdateProfile'
import { UpdateProfileSchema } from '@/ui/containers/UpdateProfileForm/UpdateProfileSchema'

export default function UpdateProfileScreen() {
  const searchParams = useLocalSearchParams<{
    fullname: string;
    email: string;
  }>()

  const { mutate: updateProfile } = useAuthUpdateProfile({
    onSuccess: () => {
      router.back()
    },
  })

  function handleUpdateProfile(data: UpdateProfileSchema) {
    updateProfile({
      email: data.email,
      fullname: data.fullname,
    })
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar Perfil" />
        <Text mb="s16">
          Mantenha suas informações atualizadas para uma melhor experiência
        </Text>
        <UpdateProfileForm
          onSubmit={handleUpdateProfile}
          defaultValues={{
            email: searchParams.email,
            fullname: searchParams.fullname,
          }}
        />
      </SafeAreaView>
    </Screen>
  )
}