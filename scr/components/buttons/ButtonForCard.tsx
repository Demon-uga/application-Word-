// @ts-nocheck
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ButtonForCard({ iconName, onPress, color="#a45353"}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons size={30} name={iconName} color={color}/>
    </TouchableOpacity>
  );
}

