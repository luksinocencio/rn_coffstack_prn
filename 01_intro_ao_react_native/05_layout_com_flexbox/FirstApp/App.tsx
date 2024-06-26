import { SafeAreaView, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{ flexDirection: 'column', backgroundColor: '#eee', flex: 1 }}>
        <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
        <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
        <View
          style={{ backgroundColor: 'dodgerblue', width: 100, height: 100 }}
        />
      </View>
    </SafeAreaView>
  )
}
