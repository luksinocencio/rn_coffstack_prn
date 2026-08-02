import Reactotron from 'reactotron-react-native'

Reactotron.configure({
  name: 'Nubble App',
})
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect()
