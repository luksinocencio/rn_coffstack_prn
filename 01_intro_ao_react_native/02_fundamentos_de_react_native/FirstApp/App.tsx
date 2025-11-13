import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import Input from './components/Input'

const DEFAULT_COLOR = '#550ab1'
export default function App() {
  function changeName(text: string) {
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profissional React Native</Text>

      <Input
        autoCapitalize='none'
        placeholder='Digite seu nome'
        onChangeText={changeName}
      />

      <Input
        autoCapitalize='none'
        placeholder='Digite sua senha'
        secureTextEntry
        onChangeText={changeName}
      />

      <Button
        title='Entrar'
        style={{ marginTop: 20 }}
        onPress={() => console.log('SignIn')}
      />
      <Button
        title='Criar Conta'
        variant='outlined'
        style={{ marginTop: 10 }}
        onPress={() => console.log('SignUp')}
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
