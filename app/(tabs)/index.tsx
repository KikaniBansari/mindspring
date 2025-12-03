import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌿 MindSpring</Text>
        <Text style={styles.subtitle}>3-Minute Mental Reset</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome Back!</Text>
        <Text style={styles.cardText}>
          Take a moment for yourself today. Choose your mood and let's reset.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/mood")}
        >
          <Text style={styles.buttonText}>Start Session</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>🎮</Text>
          <Text style={styles.featureText}>6 Emotion-Based Games</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>⏱️</Text>
          <Text style={styles.featureText}>3-Minute Sessions</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>📊</Text>
          <Text style={styles.featureText}>Daily Analytics</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>🔒</Text>
          <Text style={styles.featureText}>Secure Local Storage</Text>
        </View>
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#2D1B4E",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B5B95",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2D1B4E",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#6B5B95",
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#8B5CF6",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  featuresContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D1B4E",
    marginBottom: 15,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DFF5",
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  featureText: {
    fontSize: 14,
    color: "#6B5B95",
    flex: 1,
  },
});
