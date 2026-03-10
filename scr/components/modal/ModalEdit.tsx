import { useState } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import ButtonEdit from "../buttons/ButtonEdit";

export default function ModalEdit({ card, modal, onClose, saveEditCard }) {
  const [wordValue, setWordValue] = useState(card.word);
  const [translationValue, setTransValue] = useState(card.translation);
  const [exampleValue, setExampleValue] = useState(card.example);
  const [intervalValue, setIntervalValue] = useState(card.interval);

  const closeModalEdit = () => {
    setWordValue(card.word)
    setTransValue(card.translation)
    setExampleValue(card.example)
    setIntervalValue(card.interval)
    onClose()
  }

  const save = () => {
    const day =  24 * 60 * 60 * 1000;
    const editCard = {
      ...card,
      word: wordValue,
      translation: translationValue,
      example: exampleValue,
      interval: intervalValue, 
      nextRepeat: Date.now() + intervalValue * day
    }
    saveEditCard(editCard)
    onClose()
  }

  return (
    <Modal visible={modal} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.card}>
            <Text style={styles.text}>Word:</Text>
            <TextInput
              style={styles.input}
              value={wordValue}
              onChangeText={setWordValue}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Translation:</Text>
            <TextInput style={styles.input} value={translationValue} onChangeText={setTransValue} />
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Example:</Text>
            <TextInput style={styles.input} value={exampleValue} onChangeText={setExampleValue} />
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Repeat after</Text>
            <TextInput style={styles.input} value={intervalValue.toString()} onChangeText={setIntervalValue} />
            <Text style={styles.text}>days</Text>
          </View>
          <View style={styles.buttonCase}>
            <ButtonEdit color="#386c3c" iconName="checkmark" text="Save" onPress={() => save()} />
            <ButtonEdit color="rgb(141, 31, 31)" iconName="close" text="Close" onPress={() => closeModalEdit()} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContent: {
    backgroundColor: "#1e293b",
    padding: 25,
    borderRadius: 20,
    width: "80%",
    maxWidth: 350,
    borderWidth: 1,
    borderColor: "#db9567",
    gap: 15,
    // Тени
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  card: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "100%",
  },
  input: {
    fontSize: 18,
    textAlign: "center",
    color: "#faead6",
    paddingBottom: 5,
    paddingTop: 5,
    paddingHorizontal: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: "#db9567",
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "#faead6",
    fontWeight: "500",
    width: 90,
  },
  daysText: {
    fontSize: 16,
    color: "#9ca3af",
    fontStyle: "italic",
    width: 45,
    marginLeft: 5,
  },
  buttonCase: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 10,
  },
  intervalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
});