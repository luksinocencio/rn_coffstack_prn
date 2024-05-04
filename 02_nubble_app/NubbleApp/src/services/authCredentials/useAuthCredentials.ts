import { useContext } from 'react'

import { AuthCredentialsService } from './authCredentialsTypes'
import { AuthCredentialsContenxt } from './Providers/AuthCredentialsProviders'

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContenxt)

  if (!context) {
    throw new Error(
      'useAuthCredentials must be used within an AuthCredentialsProvider',
    )
  }

  return context
}

/**
 * @description utilizando zustand
 */
// export function useAuthCredentials(): AuthCredentialsService {
//   return useAuthCredentialsZustand()
// }

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       isLoading: false,
//       saveCredentials: async ac => set({ authCredentials: ac }),
//       removeCredentils: async () => set({ authCredentials: null }),
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// )
