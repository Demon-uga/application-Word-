import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ButtonDelete({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons size={30} name={iconName} color="#a45353"/>
    </TouchableOpacity>
  );
}

