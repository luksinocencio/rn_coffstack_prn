import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  function changeName(text: string) {
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
        Profissional React Native
      </Text>
      <TextInput
        value='Rafael'
        autoCapitalize='none'
        multiline
        placeholder='Digite seu nome'
        // onChange={(e) => console.log(e.nativeEvent.text)}
        // onChangeText={text => console.log(text)}
        onChangeText={changeName}
        keyboardType='email-address'
        placeholderTextColor='#ddd'
        style={{
          borderWidth: 1,
          height: 50,
          width: 250,
          marginTop: 10,
          paddingHorizontal: 10,
          borderRadius: 8,
          color: '#550ab1',
          fontWeight: 'bold',
          fontSize: 18,
        }}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
