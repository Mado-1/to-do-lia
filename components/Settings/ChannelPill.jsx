import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ChannelPill({ text, filled, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.pill,
        filled && { backgroundColor: "#3cb371", borderColor: "#3cb371" },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.pillText, filled && { color: "#fff" }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  pillText: {
    fontSize: 13,
    color: "#000",
    fontWeight: "500",
  },
});
