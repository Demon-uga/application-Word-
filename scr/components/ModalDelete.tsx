import { Modal, Text, StyleSheet, View } from "react-native";
import MyButton from "./MyButton";

export default function ModalDelete({ modal, onPress, onClose }) {
  return (
    <Modal visible={modal} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Are you sure?</Text>
          
          <View style={styles.buttonRow}>
            <MyButton
              text="of course!"
              iconName="trash"
              color="#386c3c"
              onPress={() => onPress()}
            />
            <MyButton
              text="No way!"
              iconName="close"
              color="rgb(141, 31, 31)"
              onPress={() => onClose()}
            />
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
    borderColor: "#ff954f",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
});