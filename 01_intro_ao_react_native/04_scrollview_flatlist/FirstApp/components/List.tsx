import { Platform, ScrollView, Text, View } from "react-native";
import magic from "../cards.json";
import { Item } from "./Item";

export function List() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={({ nativeEvent }) =>
        console.log(`${Platform.OS} ${nativeEvent.contentOffset.y}`)
      }
      scrollEventThrottle={16}
    >
      {magic.cards.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
