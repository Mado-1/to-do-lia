import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, TouchableOpacity } from "react-native";

const AIChatButtonV2 = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <MaterialCommunityIcons name="robot-happy" size={28} color="#FFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    width: 64,
    height: 64,
    right: 20,
    bottom: 20,
    borderRadius: 32,
    backgroundColor: "rgba(99, 102, 241, 1)", // Semi-transparent blue (85% opacity)
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default AIChatButtonV2;
