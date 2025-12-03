import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ResultScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const mood = params.mood as string;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkEmoji}>✅</Text>
        </View>

        <Text style={styles.title}>Session Complete!</Text>
        <Text style={styles.subtitle}>Great job taking time for yourself</Text>

        <View style={styles.resultCard}>
          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Mood</Text>
            <Text style={styles.resultValue}>{mood}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Duration</Text>
            <Text style={styles.resultValue}>3:00</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Streak</Text>
            <Text style={styles.resultValue}>+1 Day</Text>
          </View>
        </View>

        <View style={styles.reflection}>
          <Text style={styles.reflectionTitle}>How do you feel now?</Text>
          <View style={styles.moods}>
            {["😊", "😌", "😄"].map((emoji, idx) => (
              <TouchableOpacity key={idx} style={styles.moodOption}>
                <Text style={styles.moodEmoji}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f1e8",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  checkmark: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#C8E6C9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  checkmarkEmoji: {
    fontSize: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D1B4E",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B5B95",
    marginBottom: 30,
    textAlign: "center",
  },
  resultCard: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  resultLabel: {
    fontSize: 12,
    color: "#A78BFA",
    fontWeight: "500",
  },
  resultValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D1B4E",
  },
  divider: {
    height: 1,
    backgroundColor: "#E8DFF5",
  },
  reflection: {
    width: "100%",
    marginBottom: 30,
  },
  reflectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D1B4E",
    marginBottom: 15,
    textAlign: "center",
  },
  moods: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  moodOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  moodEmoji: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#8B5CF6",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
