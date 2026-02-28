import { StyleSheet, Text, TouchableOpacity  } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MyButton({iconName, onPress}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
            <Ionicons name={iconName} size={30}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#abbcf5",
        padding: 10,
        borderRadius: 50
    },
    buttonText: {
        textAlign: "center",
    }
})