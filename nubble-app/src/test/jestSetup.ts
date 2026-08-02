//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

import { initializeStorage } from '../services/storage'
import { inMemoryStorage } from '../services/storage/implementation/jest/inMemoryStorage'

// Ao ser importado, o axios detecta suporte a request streams chamando
// `cancel()` num ReadableStream que o `Request` já travou. Pelo spec isso
// devolve uma promise rejeitada e a rejeição sem tratamento derruba a suíte
// antes do primeiro teste rodar.
// Precisa ficar antes de qualquer import de axios, por isso vive no setupFiles.
if (typeof ReadableStream !== 'undefined') {
  const originalStreamCancel = ReadableStream.prototype.cancel
  ReadableStream.prototype.cancel = function cancel(reason?: unknown) {
    return originalStreamCancel.call(this, reason).catch(() => undefined)
  }
}

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}))

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native')
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
      push: jest.fn(),
    }),
  }
})

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    getPhotos: jest.fn(async () => ({
      edges: [
        { node: { image: { uri: 'image-1' } } },
        { node: { image: { uri: 'image-2' } } },
        { node: { image: { uri: 'image-3' } } },
      ],
    })),
  },
}))

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
)

jest.mock('../services/permission/permissionService', () => ({
  permissionService: {
    request: jest.fn(),
    check: jest.fn(),
  },
}))

jest.mock('react-native-nitro-image', () => ({
  Images: {
    loadFromFileAsync: jest.fn(async () => ({
      width: 100,
      height: 100,
      saveToTemporaryFileAsync: jest.fn(async () => '/tmp/image.jpg'),
    })),
  },
}))

jest.mock('react-native-bootsplash', () => ({
  __esModule: true,
  default: {
    hide: jest.fn().mockResolvedValue(undefined),
    // Na v7 o `isVisible` é síncrono.
    isVisible: jest.fn().mockReturnValue(false),
    useHideAnimation: jest.fn(),
  },
}))

initializeStorage(inMemoryStorage)
