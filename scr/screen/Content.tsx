import useCards from "../hooks/useCards";
import useStats from "../hooks/useStats";
import AddCard from "./AddCard";
import ListCards from "./ListCards";
import RepeatCards from "./RepeatCards";
import { View, StyleSheet } from "react-native";
import Stats from "./Stats";

export default function Content({ screen }) {
  const { cards, addArrCard, deleteCard, updateCardInterval, saveEditCard } = useCards();
    const {stats, updateStat} = useStats()

  return (
    <View style={styles.content}>
      {screen == "add" && <AddCard onAdd={addArrCard} />}
      {screen == "list" && (
        <ListCards
          cards={cards}
          onPress={deleteCard}
          saveEditCard={saveEditCard}
        />
      )}
      {screen == "repeat" && (
        <RepeatCards cards={cards} updateCardInterval={updateCardInterval} updateStat={updateStat}/>
      )}
      {screen == "stats" && <Stats stats={stats} totalCard={cards.length}/>}
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
