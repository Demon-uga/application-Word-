import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import AddCard from "./scr/screen/AddCard";
import ListCards from "./scr/screen/ListCards";
import MyButton from "./scr/components/MyButton";
import Cards from "./scr/hooks/Cards";

export default function App() {
  const [screen, setScreen] = useState("add");
  const { cards, addArrCard, deleteCard } = Cards();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {screen == "add" ? (
          <AddCard onAdd={addArrCard} />
        ) : (
          <ListCards cards={cards} onPress={deleteCard}/>
        )}
      </View>
      <View style={styles.buttons}>
        <MyButton iconName="add-circle" onPress={() => setScreen("add")} />
        <MyButton iconName="list" onPress={() => setScreen("list")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7d4fa",
    paddingTop: 50,
    paddingBottom: 20
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
