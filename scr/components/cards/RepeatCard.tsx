import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalEnd from "../modal/ModalEnd";
import {
  iconsCheckAnswer,
  colorCheckAnswer,
  filterAndSortArr,
  checkAnswer,
  pickOutComplexity,
} from "../../logic/RepeatLogic";

export default function RepeatCard({ cards, updateCardInterval, updateStat }) {
  const [answer, setAnswer] = useState(null);
  const [value, setValue] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [revers, setRevers] = useState(true);

  const newArr = filterAndSortArr(cards);
  const card = newArr.length > 0 && newArr[0];

  if (newArr.length === 0) {
    return (
      <>
        <Text style={styles.emptyText}>Нет карточек для повторения</Text>
        <ModalEnd modal={modal} onClose={() => setModal(false)} />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.countCard}>Pending: {newArr.length}</Text>
        <Text style={styles.word}>{revers ? card.word : card.translation}</Text>
        {(errorCount === 2 || answer) && (
          <View style={styles.hintContainer}>
            <Text style={styles.hintText}>
              {revers ? card.translation : card.word}
            </Text>
          </View>
        )}

        <Text style={styles.example}>{revers && card.example}</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="answer..."
            placeholderTextColor={"grey"}
            value={value}
            onChangeText={setValue}
          />
          {answer !== null && (
            <View style={styles.icon}>
              <Ionicons
                name={iconsCheckAnswer(answer)}
                color={colorCheckAnswer(answer)}
                size={24}
              />
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => checkAnswer(value, card, setAnswer, setErrorCount, errorCount)}
          >
            <Text style={styles.buttonText}>check</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.difficultyRow}>
          <TouchableOpacity
            style={[styles.difficultyButton, styles.ease]}
            onPress={() =>
              pickOutComplexity(
                "Ease",
                card,
                updateCardInterval,
                updateStat,
                setAnswer,
                setValue,
                setErrorCount,
                setModal,
                setRevers,
                newArr
              )
            }
          >
            <Text style={(styles.difficultyText, styles.textEasy)}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.difficultyButton, styles.medium]}
            onPress={() =>
              pickOutComplexity(
                "Medium",
                card,
                updateCardInterval,
                updateStat,
                setAnswer,
                setValue,
                setErrorCount,
                setModal,
                setRevers,
                newArr
              )
            }
          >
            <Text style={styles.difficultyText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.difficultyButton, styles.hard]}
            onPress={() =>
              pickOutComplexity(
                "Hard",
                card,
                updateCardInterval,
                updateStat,
                setAnswer,
                setValue,
                setErrorCount,
                setModal,
                setRevers,
                newArr
              )
            }
          >
            <Text style={styles.difficultyText}>Hard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#333131",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    width: "80%",
  },
  countCard: {
    textAlign: "right",
    color: "#9ca3af",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.3,
    textTransform: "uppercase",
    opacity: 0.8,
  },
  word: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    marginBottom: 0,
    color: "#faead6",
    textTransform: "capitalize",
  },
  hintContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  hintText: {
    fontSize: 20,
    color: "#4f9eff",
    textAlign: "center",
    textTransform: "capitalize",
  },
  example: {
    fontSize: 16,
    color: "#6c757d",
    marginVertical: 15,
    fontStyle: "italic",
    paddingHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#1f2937",
    color: "#f3f4f6",
  },
  icon: {
    marginLeft: 10,
    width: 30,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  checkButton: {
    backgroundColor: "#6366f1", // индиго
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  difficultyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  difficultyButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  difficultyText: {
    color: "#effafd",
    fontWeight: "600",
  },
  textEasy: {
    fontWeight: "600",
    color: "#4e4e4e",
  },
  ease: {
    backgroundColor: "#d1d5db",
  },
  medium: {
    backgroundColor: "#9ca3af", // серый
  },
  hard: {
    backgroundColor: "#4b5563", // темно-серый
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#6c757d",
  },
});
