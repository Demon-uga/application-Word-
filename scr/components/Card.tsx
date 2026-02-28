import {  useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import ButtonDelete from "./ButtonDelete";
import ModalDelete from "./ModalDelete";

function CardItem({ card, onPress }) {
  const [openTranslation, setOpenTranslation] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false)

  return (
    <TouchableWithoutFeedback
      onPress={() => setOpenTranslation(!openTranslation)}
    >
      <View style={styles.card}>
        <View style={styles.wordAndDelete}>
          <Text style={styles.word}>{card.word}</Text>
          {openTranslation && (
            <ButtonDelete iconName="trash" onPress={() => setOpenModalDelete(true)} />
          )}
        </View>
        {openTranslation && (
          <Text style={styles.translation}>{card.translation}</Text>
        )}
        <Text style={styles.example}>{card.example}</Text>
      <ModalDelete modal={openModalDelete} onPress={() => onPress(card.id)} onClose={() => setOpenModalDelete(false)} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function Card({ cards, onPress }) {
  return (
    <View style={styles.container}>
      {cards.length === 0 ? (
        <Text>Cписок пуст</Text>
      ) : (
        cards.map((card) => (
          <CardItem key={card.id} card={card} onPress={onPress} />
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
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,

    shadowColor: "#4f9eff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,

    width: "90%",
    alignSelf: "center",
  },
  word: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  translation: {
    fontSize: 16,
    color: "#4f9eff",
    fontWeight: "500",
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: "#94a3b8",
    fontStyle: "italic",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },
  wordAndDelete: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
