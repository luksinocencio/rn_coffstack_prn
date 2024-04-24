import { useNavigation } from '@react-navigation/native'

import { AuthStackParamList } from '@routes'

export function useResetNavigationSuccess() {
  const navigation = useNavigation()

  function reset(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'SignInScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    })
  }

  return { reset }
}
