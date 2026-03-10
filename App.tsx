// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import MyButton from "./scr/components/buttons/MyButton";
import Buttonstatistics from "./scr/components/buttons/ButtonStatistics";
import Content from "./scr/screen/Content";

export default function App() {
  const [screen, setScreen] = useState("add");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Buttonstatistics color="green" iconName="stats-chart-outline" onPress={() => setScreen("stats")} />
      </View>
      <Content screen={screen} />
      <View style={styles.buttons}>
        <MyButton iconName="add-circle" onPress={() => setScreen("add")} />
        <MyButton iconName="repeat" onPress={() => setScreen("repeat")} />
        <MyButton iconName="book" onPress={() => setScreen("list")} />
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
    paddingBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
