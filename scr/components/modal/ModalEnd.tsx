import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function ModalEnd({modal, onClose}) {
  
  return (
    <Modal visible={modal} transparent={true} animationType="fade">
      <TouchableOpacity onPress={() => onClose()} style={styles.alertOverlay}>
        <View style={styles.alertBox}>
          <Ionicons name="happy-outline" size={40} color="#4f9eff" />
          <Text style={styles.alertTitle}>Поздравляю!</Text>
          <Text style={styles.alertMessage}>Ты повторил все карточки!</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  alertOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  alertBox: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4f9eff",
    width: "80%",
    maxWidth: 300,
  },
  alertTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#faead6",
    marginTop: 10,
  },
  alertMessage: {
    fontSize: 16,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 5,
  },
});
