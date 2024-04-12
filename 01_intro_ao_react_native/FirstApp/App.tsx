import { Image, StyleSheet, Text, View } from 'react-native'

export default function App() {
  Image.getSize(
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    (width, height) => {
      console.log(width, height)
    }
  )

  return (
    <View style={styles.container}>
      <Text>Profissional React Native</Text>
      <Image
        style={{ height: 250, width: 250 }}
        // source={require('./assets/logo.jpeg')}
        onLoad={({ nativeEvent }) => {
          console.log(nativeEvent.source.height)
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
