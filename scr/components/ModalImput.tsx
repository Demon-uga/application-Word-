import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import { useState } from "react";

export default function ModalImput({ modal, onSave, onClose }) {
  const [translation, setTranslation] = useState("");
  const [example, setExample] = useState("");

  const addCard = () => {
    if (translation.trim() != "" && example.trim() != "") {
      onSave(translation, example);
      setTranslation("");
      setExample("");
      onClose();
    }
  };

  return (
    <Modal visible={modal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            onChangeText={setTranslation}
            value={translation}
            placeholder="Перевод"
          />
          <TextInput
            style={styles.input}
            onChangeText={setExample}
            value={example}
            placeholder="Пример"
          />
          <View style={styles.buttonRow}>
            <Button title="Добавить" onPress={addCard} />
            <Button title="Отмена" onPress={() => onClose()} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    backgroundColor: "#c0d6f5",
    borderColor: "gray",
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
