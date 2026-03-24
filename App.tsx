// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import MyButton from "./scr/components/buttons/MyButton";
import Buttonstatistics from "./scr/components/buttons/ButtonStatistics";
import Content from "./scr/screen/Content";
import Ionicons from "@expo/vector-icons/Ionicons";
import useStats from "./scr/hooks/useStats";

export default function App() {
  const [screen, setScreen] = useState("add");
  const { stats } = useStats();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.streakContainer}>
          <Ionicons name="flame-outline" size={24} color="#c94609" />
          <Text style={styles.streakText}>{stats.streak}</Text>
        </View>
        <Buttonstatistics
          color="green"
          iconName="stats-chart-outline"
          onPress={() => setScreen("stats")}
        />
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  streakText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#382812",
    marginLeft: 5,
  },
});
