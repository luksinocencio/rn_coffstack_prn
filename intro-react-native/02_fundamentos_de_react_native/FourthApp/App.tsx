import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./components/Button";
import Input from "./components/Input";

async function getListFromApi(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["item 1", "item 2", "item 3"]);
    }, 2000);
  });
}

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   if (list.length === 5) {
  //     Alert.alert("Você atingiu o limite de itens");
  //   }
  //   console.log("effect");
  // }, [list]);

  async function getList() {
    try {
      const values = await getListFromApi();
      setList(values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  function addItem() {
    setList((prev) => [...prev, text]);
  }

  function removeItem(text: string) {
    setList((prev) => prev.filter((item) => item !== text));
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#550ab1" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <Input placeholder="add item" onChangeText={setText} />
        <Button
          title="+"
          style={{ width: 44, height: 44, marginLeft: 10 }}
          onPress={addItem}
        />
      </View>

      {list.map((item) => (
        <View key={item} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeItem(item)}
          >
            <Text style={styles.textRemove}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#550ab1",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  textRemove: {
    fontSize: 16,
    color: "#1d013f",
    fontWeight: "bold",
  },
});
