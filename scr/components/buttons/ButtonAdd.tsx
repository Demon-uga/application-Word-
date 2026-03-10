import { TouchableOpacity, Text, StyleSheet} from "react-native";

export default function ButtonAdd({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#819bf0",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    padding: 5,
  },
});