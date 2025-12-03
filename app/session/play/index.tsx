import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function PlayScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const mood = params.mood as string;

  useEffect(() => {
    if (timeLeft <= 0) {
      router.push({
        pathname: "/session/result",
        params: { mood },
      });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, mood, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.moodEmoji}>😌</Text>
        <Text style={styles.title}>{mood}</Text>
        <Text style={styles.subtitle}>Playing therapeutic game...</Text>

        <View style={styles.gameArea}>
          <Text style={styles.gameText}>Game placeholder</Text>
          <Text style={styles.gameSubtext}>
            Interactive games coming soon!
          </Text>
        </View>

        <View style={styles.timer}>
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
          <Text style={styles.timerLabel}>Time Remaining</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8DFF5",
    paddingTop: 40,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "#6B5B95",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  moodEmoji: {
    fontSize: 80,
    marginBottom: 20,
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
    marginBottom: 30,
  },
  gameArea: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  gameText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2D1B4E",
    marginBottom: 10,
  },
  gameSubtext: {
    fontSize: 14,
    color: "#A78BFA",
  },
  timer: {
    alignItems: "center",
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2D1B4E",
    fontVariant: ["tabular-nums"],
  },
  timerLabel: {
    fontSize: 12,
    color: "#6B5B95",
    marginTop: 8,
  },
});
