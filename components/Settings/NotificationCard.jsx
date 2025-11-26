import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
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
  onChannelToggle,
  Channels = {},
  defaultSwitch = false
}) {
  const defaultChannels = {
    SMS: false,
    WhatsApp: false,
    Email: false,
    Push: false,
    ...Channels,
  };

  const [switchValue, setSwitchValue] = useState(defaultSwitch);

  // If defaultSwitch prop changes, update the state
  useEffect(() => {
    setSwitchValue(defaultSwitch);
  }, [defaultSwitch]);

  const handleToggle = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);                // update local state
    onToggle(newValue);                      // notify parent
    onChannelToggle(`${title} ${newValue ? "Enabled" : "Disabled"}`); // show toast
  };

  const [channels, setChannels] = useState(defaultChannels);

  // If Channels prop changes, update state
  useEffect(() => {
    const defaultChannels = {
      SMS: false,
      WhatsApp: false,
      Email: false,
      Push: false,
      ...Channels,
    };
    setChannels(defaultChannels);
  }, [Channels]);

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

        <Switch value={switchValue} onValueChange={handleToggle} />
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
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 14, marginBottom: 20 },
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
