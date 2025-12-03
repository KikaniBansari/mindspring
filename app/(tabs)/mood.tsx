import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const moods = [
  { emoji: "😰", label: "Stressed", color: "#FF6B6B" },
  { emoji: "😵", label: "Overwhelmed", color: "#FF8E72" },
  { emoji: "🌫️", label: "Foggy", color: "#B0A4DE" },
  { emoji: "😕", label: "Confused", color: "#FFB84D" },
  { emoji: "😴", label: "Tired", color: "#A78BFA" },
  { emoji: "🤯", label: "Full Mind", color: "#C084FC" },
];

export default function MoodScreen() {
  const router = useRouter();

  const handleMoodSelect = (mood: string) => {
    router.push({
      pathname: "/session/play",
      params: { mood },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How are you feeling?</Text>
        <Text style={styles.subtitle}>Choose your mood to start a 3-minute session</Text>
      </View>

      <View style={styles.gridContainer}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.moodCard, { borderColor: mood.color }]}
            onPress={() => handleMoodSelect(mood.label)}
          >
            <Text style={styles.emoji}>{mood.emoji}</Text>
            <Text style={styles.label}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
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
    textAlign: "center",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  moodCard: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D1B4E",
    textAlign: "center",
  },
});
