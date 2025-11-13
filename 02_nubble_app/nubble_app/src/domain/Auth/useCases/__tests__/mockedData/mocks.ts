import { AuthCredentials } from '@domain'

export const mockedAuthCredentialsMock: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2023-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    username: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl:
      'https://nubble-development.s3.amazonaws.com/backend-integration/1-maria.png',
    isOnline: false,
    fullName: 'Maria Julia',
  },
}
