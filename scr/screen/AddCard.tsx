import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import { useState } from "react";
import ModalImput from "../components/ModalImput";

export default function AddCard({ onAdd }) {
  const [word, setWord] = useState("");
  const [modal, setModal] = useState(false);

  const add = (translation, example) => {
    onAdd(word, translation, example);
    setWord("");
  };

  const openModal = () => {
    if (word.trim() != "") setModal(true);
  };

  return (
    <View>
      <View style={styles.inputAndButton}>
        <TextInput style={styles.input} onChangeText={setWord} value={word} />
        <Button title="добавить" onPress={openModal} />
      </View>
      <ModalImput modal={modal} onSave={add} onClose={() => setModal(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputAndButton: {
    gap: 10,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: "#c0d6f5",
    borderColor: "gray",
    borderWidth: 1,
  },
});
