// @ts-nocheck
import { StyleSheet, TextInput, View, ScrollView, Text} from "react-native";
import Card from "../components/cards/Card";
import { useState } from "react";

export default function ListCards({ cards, onPress, saveEditCard }) {
  const [text, setText] = useState("");


  const filterCards = cards.filter((card) =>
    card.word.toLowerCase().includes(text.toLowerCase()),
  );


  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
      >
        <Card cards={text.trim() === "" ? cards : filterCards} onPress={onPress} saveEditCard={saveEditCard}/>
      </ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Поиск..."
          placeholderTextColor="#372727"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: "80%"
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#c7d4fa",
  },
  input: {
    height: 40,
    width: "100%", 
    backgroundColor: "#c0d6f5",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  scrollView: {
    flex: 1, 
  },
  scrollContent: {
    paddingBottom: 20,
    alignItems: "center", 
  },
});
