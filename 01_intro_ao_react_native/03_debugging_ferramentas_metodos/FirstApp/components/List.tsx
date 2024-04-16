import { Text, View } from 'react-native'

const list = ['element 1', 'element 2', 'element 3']
console.log(list)

export function List() {
  return (
    <View>
      {list.map((item, index) => (
        <Text key={String(index)}>{item}</Text>
      ))}
    </View>
  )
}
