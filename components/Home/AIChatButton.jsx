import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AIChatButton({ onPress, isOpen }) {
  return (
    <TouchableOpacity style={styles.aiButton} onPress={onPress}>
      <View style={styles.aiButtonContent}>
        <View style={styles.iconContainer}>
          <Ionicons name="chatbubbles" size={24} color="#FFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.aiTitle}>AI Assistant</Text>
          <Text style={styles.aiSubtitle}>Unstressable</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aiButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7C3AED",
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  aiButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    gap: 2,
  },
  aiTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
  aiSubtitle: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
