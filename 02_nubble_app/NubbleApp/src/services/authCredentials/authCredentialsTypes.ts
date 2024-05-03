import { AuthCredentials } from '@domain'

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null
  saveCredentials: (ac: AuthCredentials) => Promise<void>
  removeCredentils: () => Promise<void>
  isLoading: boolean
}
