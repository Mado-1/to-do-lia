import { StyleSheet, Text, View } from "react-native";

const TimelineCard = () => {
  return (
    <View style={styles.timelineCard}>
      <View style={styles.timelineHeader}>
        <Text style={styles.timelineIcon}>📈</Text>
        <Text style={styles.timelineTitle}>Activity Timeline</Text>
      </View>
      <Text style={styles.timelineSubtitle}>
        Visual timeline of your upcoming week
      </Text>
      <View style={styles.tipContainer}>
        <Text style={styles.tipIcon}>💡</Text>
        <Text style={styles.tipText}>
          Tip: Tap on any activity for more details
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timelineCard: {
    backgroundColor: "white",
    margin: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  timelineHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  timelineIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  timelineTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
  },
  timelineSubtitle: {
    fontSize: 16,
    color: "#9ca3af",
    marginBottom: 16,
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef3c7",
    padding: 12,
    borderRadius: 8,
  },
  tipIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  tipText: {
    fontSize: 14,
    color: "#92400e",
  },
});

export default TimelineCard;
