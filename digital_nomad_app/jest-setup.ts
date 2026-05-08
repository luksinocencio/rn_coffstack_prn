jest.mock('react-native-worklets', () => require('react-native-worklets/lib/module/mock'))

require('react-native-reanimated').setUpTests()

jest.mock('react-native-maps', () => {
  const React = require('react')
  const { View } = require('react-native')

  return {
    __esModule: true,
    default: React.forwardRef((props, ref) => React.createElement(View, { ...props, ref })),
  }
})
