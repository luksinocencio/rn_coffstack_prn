import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron.configure({ name: 'Digital Nomad' })
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect()

reactotron.clear()

console.tron = reactotron

export default reactotron
