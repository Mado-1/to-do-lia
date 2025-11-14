import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Home/Header";

export default function ActivityTimeline() {
  const [expandedActivity, setExpandedActivity] = useState(null);

  const activities = [
    {
      id: 1,
      date: "Tomorrow",
      count: 1,
      items: [
        {
          time: "5:30 PM",
          timeUntil: "in 1d",
          title: "Swimming Lesson",
          icon: "⚽",
          tags: [
            { label: "Svenska Lag", color: "#a855f7" },
            { label: "sports", color: "#e5e7eb" },
          ],
          location: "Eriksdalsbadet",
          person: "Oscar",
          duration: "60 minutes",
          leaveTime: "Leave at 5:10 PM",
          packing: {
            title: "Packing checklist (4 items)",
            items: ["Swimsuit", "Towel", "Goggles", "+1 more"],
          },
        },
      ],
    },
    {
      id: 2,
      date: "Friday, Nov 14",
      count: 0,
      items: [],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* Timeline Card */}
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

      {/* Activities */}
      {activities.map((day) => (
        <View key={day.id} style={styles.dayContainer}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayTitle}>{day.date}</Text>
            <Text style={styles.activityCount}>{day.count} activity</Text>
          </View>

          {day.items.map((activity, index) => (
            <TouchableOpacity
              key={index}
              style={styles.activityCard}
              onPress={() =>
                setExpandedActivity(
                  expandedActivity === activity.time ? null : activity.time
                )
              }
              activeOpacity={0.7}
            >
              <View style={styles.timeline}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
              </View>

              <View style={styles.activityContent}>
                <Text style={styles.activityTime}>{activity.time}</Text>
                <View style={styles.timeBadge}>
                  <Text style={styles.timeBadgeText}>{activity.timeUntil}</Text>
                </View>

                <View style={styles.activityMain}>
                  <Text style={styles.activityIcon}>{activity.icon}</Text>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                </View>

                <View style={styles.tagsContainer}>
                  {activity.tags.map((tag, idx) => (
                    <View
                      key={idx}
                      style={[styles.tag, { backgroundColor: tag.color }]}
                    >
                      <Text
                        style={[
                          styles.tagText,
                          tag.color === "#a855f7" && styles.tagTextWhite,
                        ]}
                      >
                        {tag.label}
                      </Text>
                    </View>
                  ))}
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailIcon}>📍</Text>
                  <Text style={styles.detailText}>{activity.location}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailIcon}>👤</Text>
                  <Text style={styles.detailText}>{activity.person}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailIcon}>🕐</Text>
                  <Text style={styles.detailText}>{activity.duration}</Text>
                </View>

                <View style={styles.leaveTime}>
                  <Text style={styles.leaveIcon}>🚗</Text>
                  <Text style={styles.leaveText}>{activity.leaveTime}</Text>
                </View>

                <View style={styles.packingContainer}>
                  <Text style={styles.packingIcon}>📦</Text>
                  <Text style={styles.packingTitle}>
                    {activity.packing.title}
                  </Text>
                  <View style={styles.packingItems}>
                    {activity.packing.items.map((item, idx) => (
                      <View key={idx} style={styles.packingItem}>
                        <Text style={styles.packingItemText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonIcon}>🎁</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#e8eaf0",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1e3a8a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    lineHeight: 24,
  },
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
  dayContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  dayHeader: {
    backgroundColor: "#dbeafe",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1e40af",
    marginBottom: 4,
  },
  activityCount: {
    fontSize: 16,
    color: "#3b82f6",
  },
  activityCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  timeline: {
    width: 24,
    alignItems: "center",
    marginRight: 16,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#3b82f6",
    marginBottom: 8,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: "#dbeafe",
  },
  activityContent: {
    flex: 1,
  },
  activityTime: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  timeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 16,
  },
  timeBadgeText: {
    fontSize: 14,
    color: "#6b7280",
  },
  activityMain: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4b5563",
  },
  tagTextWhite: {
    color: "white",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 8,
    width: 20,
  },
  detailText: {
    fontSize: 16,
    color: "#6b7280",
  },
  leaveTime: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  leaveIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  leaveText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3b82f6",
  },
  packingContainer: {
    backgroundColor: "#f9fafb",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  packingIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  packingTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#a855f7",
    marginBottom: 12,
  },
  packingItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  packingItem: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  packingItemText: {
    fontSize: 14,
    color: "#374151",
  },
  addButton: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addButtonIcon: {
    fontSize: 28,
  },
});
