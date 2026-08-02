import { useNavigation } from '@react-navigation/native'

import type { AuthStackParamList } from '../routes/AuthStack'

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
