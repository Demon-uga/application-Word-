// @ts-nocheck
import useCards from "../hooks/useCards";
import AddCard from "./AddCard";
import ListCards from "./ListCards";
import RepeatCards from "./RepeatCards";
import { View, StyleSheet } from "react-native";
import Stats from "./Stats";

export default function Content({ screen, stats, updateStat, updateAdded }) {
  const { cards, addArrCard, deleteCard, updateCardInterval, saveEditCard } =
    useCards();

  return (
    <View style={styles.content}>
      {screen == "add" && (
        <AddCard onAdd={addArrCard} updateAdded={updateAdded} />
      )}
      {screen == "list" && (
        <ListCards
          cards={cards}
          onPress={deleteCard}
          saveEditCard={saveEditCard}
        />
      )}
      {screen == "repeat" && (
        <RepeatCards
          cards={cards}
          updateCardInterval={updateCardInterval}
          updateStat={updateStat}
        />
      )}
      {screen == "stats" && <Stats stats={stats} totalCard={cards.length} />}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
