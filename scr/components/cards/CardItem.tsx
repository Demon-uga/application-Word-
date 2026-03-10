// @ts-nocheck
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import ButtonForCard from "../buttons/ButtonForCard";
import ModalDelete from "../modal/ModalDelete";
import ModalEdit from "../modal/ModalEdit";

export default function CardItem({ card, onPress, saveEditCard}) {
  const [openTranslation, setOpenTranslation] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => setOpenTranslation(!openTranslation)}
    >
      <View style={styles.card}>
        <View style={styles.wordAndDelete}>
          <Text style={styles.word}>{card.word}</Text>
          {openTranslation && (
            <View style={styles.buttonBox}>
              <ButtonForCard
                color="rgb(139, 143, 214)"
                iconName="create-outline"
                onPress={() => setOpenModalEdit(true)}
              />
              <ButtonForCard
                iconName="trash"
                onPress={() => setOpenModalDelete(true)}
              />
            </View>
          )}
        </View>
        {openTranslation && (
          <Text style={styles.translation}>{card.translation}</Text>
        )}
        <Text style={styles.example}>{card.example}</Text>
        <ModalDelete
          modal={openModalDelete}
          onPress={() => onPress(card.id)}
          onClose={() => setOpenModalDelete(false)}
        />
        <ModalEdit
          card={card}
          modal={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          saveEditCard={saveEditCard}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    textTransform: "capitalize" 
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
    textTransform: "capitalize" 
  },
  wordAndDelete: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonBox: {
    flexDirection: "row",
    gap: 20,
  },
});
