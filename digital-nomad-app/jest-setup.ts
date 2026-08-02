jest.mock('react-native-worklets', () => require('react-native-worklets/lib/module/mock'))

require('react-native-reanimated').setUpTests()

jest.mock('react-native-maps', () => {
  const { createElement, forwardRef } = require('react')
  const { View } = require('react-native')

  return {
    __esModule: true,
    default: forwardRef((props, ref) => createElement(View, { ...props, ref })),
  }
})

jest.setTimeout(30000)
