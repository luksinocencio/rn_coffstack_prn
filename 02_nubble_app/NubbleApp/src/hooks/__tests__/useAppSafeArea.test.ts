import { renderHook } from '@testing-library/react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { AllTheProviders } from 'test-utils'

import { theme } from '@theme'

import { useAppSafeArea } from '../useAppSafeArea'

jest.mock('react-native-safe-area-context')
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

    const { result } = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    })

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

    const { result } = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    })

    expect(result.current.top).toEqual(40)
    expect(result.current.bottom).toEqual(40)
  })
})
