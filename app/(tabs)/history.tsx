import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your History</Text>
        <Text style={styles.subtitle}>Track your wellness journey</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>21</Text>
          <Text style={styles.statLabel}>Sessions Completed</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>105</Text>
          <Text style={styles.statLabel}>Minutes of Calm</Text>
        </View>
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>📈</Text>
        <Text style={styles.emptyText}>Your analytics will appear here</Text>
        <Text style={styles.emptySubtext}>Complete sessions to see your progress</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f1e8",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D1B4E",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B5B95",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8B5CF6",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#6B5B95",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D1B4E",
    marginBottom: 5,
  },
  emptySubtext: {
    fontSize: 12,
    color: "#6B5B95",
  },
});
