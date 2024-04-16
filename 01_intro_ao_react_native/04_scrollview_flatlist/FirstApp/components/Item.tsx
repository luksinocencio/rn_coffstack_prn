import { Text, View, StyleSheet } from "react-native";

export function Item({ item }: any) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>{item.name}</Text>
      <Text style={styles.subTitle}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 4,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 12,
    marginTop: 8,
    color: "gray",
  },
});
