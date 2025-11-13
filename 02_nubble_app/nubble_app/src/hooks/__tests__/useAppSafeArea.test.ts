import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { renderHook } from 'test-utils'

import { theme } from '@theme'

import { useAppSafeArea } from '../useAppSafeArea'

const mockedUseSafeAreaInsents = jest.mocked(useSafeAreaInsets)

describe('useAppSafeArea', () => {
  it('when the safe area is less than minimum requiriment, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsents.mockImplementationOnce(
      () =>
        ({
          top: 5,
          bottom: 5,
        } as EdgeInsets),
    )

    const { result } = renderHook(() => useAppSafeArea())

    expect(result.current.top).toEqual(theme.spacing.s20)
    expect(result.current.bottom).toEqual(theme.spacing.s20)
  })

  it('when the safe area is greather than minimum requiriment, it returns the safe area', () => {
    mockedUseSafeAreaInsents.mockImplementationOnce(
      () =>
        ({
          top: 40,
          bottom: 40,
        } as EdgeInsets),
    )

    const { result } = renderHook(() => useAppSafeArea())

    expect(result.current.top).toEqual(40)
    expect(result.current.bottom).toEqual(40)
  })
})
