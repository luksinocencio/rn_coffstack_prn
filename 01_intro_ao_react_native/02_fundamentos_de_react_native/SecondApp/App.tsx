import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [showCount, setShowCount] = useState(true)

  function increment() {
    // mesmo que setCount(count + 1)
    setCount(prevState => prevState + 1)
  }

  function decrement() {
    setCount(prevState => prevState - 1)
  }

  function toogleCount() {
    // setShowCount(!showCount)
    setShowCount(prev => !prev)
  }

  return (
    <View style={styles.container}>
      {showCount && <Text style={styles.title}>{count}</Text>}

      <Button title='+1' style={{ marginTop: 20 }} onPress={increment} />
      <Button title='-1' style={{ marginTop: 10 }} onPress={decrement} />
      <Button
        title='Show count'
        style={{ marginTop: 10 }}
        onPress={toogleCount}
        variant='outlined'
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
