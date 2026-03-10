import { View, StyleSheet } from "react-native";
import RepeatCard from "../components/cards/RepeatCard";

export default function RepeatCards({ cards, updateCardInterval, updateStat }) {
  return (
    <View style={styles.container}>
      <RepeatCard cards={cards} updateCardInterval={updateCardInterval} updateStat={updateStat} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
