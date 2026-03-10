// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyButton({
  iconName,
  onPress,
  text,
  color,
}: {
  iconName?: any;
  onPress: any;
  text?: any;
  color?: any;
}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      {iconName && <Ionicons name={iconName} size={30} color={color} />}
      {text && <Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#abbcf5",
    padding: 10,
    borderRadius: 50,
    flexDirection: "row-reverse",
  },
  buttonText: {
    textAlign: "center",
    padding: 5,
  },
});
