// @ts-nocheck
import { View, Text, StyleSheet } from "react-native";
import CardItem from "./CardItem";

export default function Card({ cards, onPress, saveEditCard }) {
  return (
    <View style={styles.container}>
      {cards.length === 0 ? (
        <Text>Cписок пуст</Text>
      ) : (
        cards.map((card) => (
          <CardItem key={card.id} card={card} onPress={onPress} saveEditCard={saveEditCard}/>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 700,
    width: "100%",
  }
});
