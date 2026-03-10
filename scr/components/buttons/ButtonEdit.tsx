import { TouchableOpacity, Text, StyleSheet} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ButtonEdit({text, iconName, color, onPress}){
    
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons  name={iconName} size={30} color={color}/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },
    text: {
        fontSize: 20,
        color: "white"
    }
})