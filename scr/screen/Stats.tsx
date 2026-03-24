// @ts-nocheck
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Stats({ stats, totalCard }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📊 Statistics</Text>

      <View style={styles.statItem}>
        <View style={styles.labelContainer}>
          <Ionicons name="book-outline" size={20} color="#b15109" />
          <Text style={styles.statLabel}>Total words:</Text>
        </View>
        <Text style={styles.statValue}>{totalCard}</Text>
      </View>

      <View style={styles.statItem}>
        <View style={styles.labelContainer}>
          <Ionicons name="repeat-outline" size={20} color="#6fae72" />
          <Text style={styles.statLabel}>Total reps:</Text>
        </View>
        <Text style={styles.statValue}>{stats.total}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <View style={styles.labelContainer}>
          <Ionicons name="create-outline" size={20} color="#dc8502" />
          <Text style={styles.statLabel}>Today words:</Text>
        </View>
        <Text style={styles.statValue}>{stats.addedToday}</Text>
      </View>

      <View style={styles.statItem}>
        <View style={styles.labelContainer}>
          <Ionicons name="today-outline" size={20} color="#7086ad" />
          <Text style={styles.statLabel}>Today reps:</Text>
        </View>
        <Text style={styles.statValue}>{stats.toDay}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <View style={styles.labelContainer}>
          <Ionicons name="trophy-outline" size={20} color="#c7ca1c" />
          <Text style={styles.statLabel}>Best day reps :</Text>
        </View>
        <Text style={styles.statValue}>{stats.bestDay}</Text>
      </View>

      <View style={styles.statItem}>
        <View style={styles.labelContainer}>
          <Ionicons name="flame-outline" size={20} color="#a90f0c" />
          <Text style={styles.statLabel}>Streak:</Text>
        </View>
        <Text style={styles.statValue}>{stats.streak} days</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2d3748",
    borderRadius: 20,
    padding: 25,
    width: "85%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#db9567",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#faead6",
    textAlign: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#db9567",
    paddingBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#4a5568",
    marginVertical: 15,
    width: "100%",
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: "#1e293b",
    borderRadius: 8,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statLabel: {
    fontSize: 15,
    color: "#9ca3af",
    fontWeight: "500",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#faead6",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});
