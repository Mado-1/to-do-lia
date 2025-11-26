import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CalendarSync, Clock8, OctagonAlert } from 'lucide-react-native';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NotificationCard from "./NotificationCard";

export default function NotificationSettings({ onChannelToast }) {
  const [urgentOn, setUrgentOn] = useState(false);
  const [briefingOn, setBriefingOn] = useState(false);
  const [weeklyOn, setWeeklyOn] = useState(false);
  const [packingOn, setPackingOn] = useState(false);
  const [conflictOn, setConflictOn] = useState(false);


  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerCard}>
          <Ionicons name="notifications-outline" size={20} color="#000" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headerTitle}>Notifications</Text>
            <Text style={styles.headerSubtitle}>
              Configure SMS, WhatsApp, email, and push alerts
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Channels</Text>
          </TouchableOpacity>
        </View>

        {/* Cards */}
        <NotificationCard
          customIcon={<OctagonAlert size={22} color="#d9994fff" />}
          title="Urgent Reminders"
          subtitle="Activity starting soon with travel time alerts"
          time="1–3 hours before"
          isOn={urgentOn}
          onToggle={setUrgentOn}
          onChannelToggle={onChannelToast}
          defaultSwitch={true}
          Channels={{ SMS: true, WhatsApp: true, Email: true, Push: true }}
        />

        <NotificationCard
          customIcon={<Clock8 size={22} color="#5c7cff" />}
          title="Daily Briefing"
          subtitle="Morning overview of the day's activities"
          time="7:00 AM daily"
          isOn={briefingOn}
          onToggle={setBriefingOn}
          onChannelToggle={onChannelToast}
          defaultSwitch={true}
          Channels={{ SMS: true, Push: true }}
        />

        <NotificationCard
          customIcon={<CalendarSync size={22} color="#9c71ff" />}
          title="Weekly Summary"
          subtitle="Sunday evening preview of the week ahead"
          time="Sunday 8:00 PM"
          isOn={weeklyOn}
          onToggle={setWeeklyOn}
          onChannelToggle={onChannelToast}
          defaultSwitch={true}
          Channels={{ SMS: true, Email: true, Push: true }}
        />

        <NotificationCard
          icon="checkmark-circle-outline"
          iconColor="#3cc27c"
          title="Packing Reminders"
          subtitle="Evening before activities with checklist items"
          time="Night before at 8:00 PM"
          isOn={packingOn}
          onToggle={setPackingOn}
          onChannelToggle={onChannelToast}
          defaultSwitch={true}
          Channels={{ SMS: true, WhatsApp: true, Email: true, Push: true }}
        />

        <NotificationCard
          customIcon={<AntDesign name="alert" size={22} color="#ff3b3bff" />}
          title="Conflict Alerts"
          subtitle="Immediate notification when scheduling conflicts detected"
          time="Immediate"
          isOn={conflictOn}
          onToggle={setConflictOn}
          onChannelToggle={onChannelToast}
          defaultSwitch={true}
          Channels={{ SMS: true, WhatsApp: true, Email: true, Push: true }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f3f6fb",
  },
  headerCard: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "600" },
  headerSubtitle: { fontSize: 13, color: "#666", marginTop: 2 },
  tabs: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#e7e7e7",
    padding: 4,
    borderRadius: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  activeTab: { backgroundColor: "#fff" },
  tabText: { fontSize: 14, fontWeight: "500", color: "#666" },
  activeTabText: { color: "#000" },
});
