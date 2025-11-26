import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import ChannelPill from "./ChannelPill";

export default function NotificationCard({ 
  icon, 
  customIcon, 
  iconColor, 
  title, 
  subtitle, 
  time, 
  isOn, 
  onToggle,
  onChannelToggle // ✅ Added prop
}) {

  const [channels, setChannels] = useState({
    SMS: false,
    WhatsApp: false,
    Email: false,
    Push: true,
  });

  const toggleChannel = (channelName) => {
    setChannels((prev) => {
      const updated = !prev[channelName];
      onChannelToggle(`${channelName} ${updated ? "Enabled" : "Disabled"}`);
      return {
        ...prev,
        [channelName]: updated,
      };
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleRow}>
          {customIcon ? (
            <View style={{ marginRight: 6 }}>{customIcon}</View>
          ) : (
            <Ionicons name={icon} size={22} color={iconColor} style={{ marginRight: 6 }} />
          )}
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{subtitle}</Text>
          </View>
        </View>

        <Switch value={isOn} onValueChange={onToggle} />
      </View>

      <View style={styles.timeRow}>
        <Ionicons name="time-outline" size={18} color="#888" />
        <Text style={styles.timeText}>{time}</Text>
      </View>

      <View style={styles.deliveryBox}>
        <Text style={styles.deliveryText}>Delivery Channels:</Text>
        <View style={styles.pillRow}>
          {Object.entries(channels).map(([key, enabled]) => (
            <ChannelPill 
              key={key}
              text={key}
              filled={enabled}
              onPress={() => toggleChannel(key)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between" },
  cardTitleRow: { flexDirection: "row", alignItems: "center", width: "80%" },
  cardTitle: { fontSize: 17, fontWeight: "600" },
  cardSubtitle: { fontSize: 13, color: "#666", marginTop: 2 },
  timeRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  timeText: { marginLeft: 6, color: "#777", fontSize: 13 },
  deliveryBox: { marginTop: 14, padding: 12, backgroundColor: "#f7f7f7", borderRadius: 12 },
  deliveryText: { fontSize: 13, color: "#444", marginBottom: 10 },
  pillRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
});
