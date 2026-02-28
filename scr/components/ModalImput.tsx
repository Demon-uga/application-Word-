import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import { useState } from "react";
import MyButton from "./MyButton";

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
            placeholder="Translation..."
          />
          <TextInput
            style={styles.input}
            onChangeText={setExample}
            value={example}
            placeholder="example..."
          />
          <View style={styles.buttonRow}>
            <MyButton iconName="add-circle" text="Add" color="#386c3c" onPress={addCard} />
            <MyButton iconName="close" text="Cancel" color="rgb(141, 31, 31)" onPress={() => onClose()} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "97%",
    backgroundColor: "#c9dffd",
    borderColor: "gray",
    borderWidth: 1,
    margin: 5
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 30,
    width: "80%",
    maxWidth: 400,
    borderWidth: 1,
    borderColor: "#ff954f",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    padding: 10
  },
});
