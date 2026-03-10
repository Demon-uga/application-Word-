// @ts-nocheck
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Stats({ stats, totalCard }) {
  return (
      <View style={styles.card}>
        <Text style={styles.title}>📊Statistics</Text>
        
        <View style={styles.statItem}>
          <View style={styles.labelContainer}>
            <Ionicons name="book-outline" size={20} color="#83400e" />
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
        
        <View style={styles.statItem}>
          <View style={styles.labelContainer}>
            <Ionicons name="today-outline" size={20} color="#51627f" />
            <Text style={styles.statLabel}>Today:</Text>
          </View>
          <Text style={styles.statValue}>{stats.toDay}</Text>
        </View>
        
        <View style={styles.statItem}>
          <View style={styles.labelContainer}>
            <Ionicons name="trophy-outline" size={20} color="#c7ca1c" />
            <Text style={styles.statLabel}>Best day:</Text>
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
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#db9567",
    paddingBottom: 10,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#1e293b",
    borderRadius: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statLabel: {
    fontSize: 16,
    color: "#9ca3af",
    fontWeight: "500",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#faead6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
    overflow: "hidden",
  },
});