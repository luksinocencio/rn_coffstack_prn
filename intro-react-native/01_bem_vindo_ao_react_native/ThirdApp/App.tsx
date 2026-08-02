import React from 'react'
import {
  Alert,
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'

const DEFAULT_COLOR = '#550ab1'
const HIGHLIGHT_COLOR = '#1D013F'
export default function App() {
  function onPressButton() {
    Alert.alert('Meu primeiro app', Platform.OS)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Enviar' onPress={onPressButton} color={DEFAULT_COLOR} />

      <TouchableHighlight
        underlayColor={HIGHLIGHT_COLOR}
        onPress={() => console.log('Highlight')}
        style={styles.button}>
        <Text style={styles.buttonTitle}>Enviar Highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => console.log('Opacity')}
        style={styles.button}>
        <Text style={styles.buttonTitle}>Enviar Opacity</Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => console.log('Pressable')}
        onLongPress={() => console.log('onLongPress')}
        style={styles.button}>
        <Text style={styles.buttonTitle}>Enviar Pressable</Text>
      </Pressable>
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
  button: {
    height: 50,
    width: 200,
    backgroundColor: DEFAULT_COLOR,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
})
