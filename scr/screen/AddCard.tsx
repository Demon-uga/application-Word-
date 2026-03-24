// @ts-nocheck
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import { useState } from "react";
import ModalImput from "../components/modal/ModalImput";
import ButtonAdd from "../components/buttons/ButtonAdd";

export default function AddCard({ onAdd, updateAdded }) {
  const [word, setWord] = useState("");
  const [modal, setModal] = useState(false);

  const add = (translation, example) => {
    onAdd(word, translation, example);
    updateAdded();
    setWord("");
  };

  const openModal = () => {
    if (word.trim() != "") setModal(true);
  };

  return (
    <View>
      <View style={styles.inputAndButton}>
        <TextInput style={styles.input} onChangeText={setWord} value={word} />
        <ButtonAdd text="Add" onPress={openModal} />
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
