import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "lucas@mail.com",
    address: {
      country: "Brasil",
      city: "",
    },
  });

  function updateFirst(text: string) {
    const updatedValues = {
      ...formValues,
      firstName: text,
    };
    setFormValues(updatedValues);
  }

  function updateLast(text: string) {
    setFormValues({
      ...formValues,
      lastName: text,
    });
  }

  function updateCity(text: string) {
    setFormValues({
      ...formValues,
      address: {
        ...formValues.address,
        city: text,
      },
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input
        value={formValues.firstName}
        onChangeText={updateFirst}
        placeholder="Primeiro nome"
      />

      <Input
        value={formValues.lastName}
        onChangeText={updateLast}
        placeholder="Sobrenome"
      />

      <Input
        value={formValues.address.city}
        onChangeText={updateCity}
        placeholder="Cidade"
      />

      <Text
        style={styles.text}
      >{`${formValues.firstName} ${formValues.lastName}: \n${formValues.email}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 50,
    fontWeight: "bold",
    marginHorizontal: 10,
    textAlign: "center",
  },
});
