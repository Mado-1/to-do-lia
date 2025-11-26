import { Ionicons } from "@expo/vector-icons";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DeliveryChannelsModal({ visible, onClose, channels, onToggleChannel }) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.modalContainer}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Delivery Channels</Text>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Channel Options */}
            <View style={styles.channelList}>
              {Object.entries(channels).map(([key, enabled]) => (
                <TouchableOpacity
                  key={key}
                  style={styles.channelItem}
                  onPress={() => onToggleChannel(key)}
                >
                  <Text style={styles.channelText}>{key}</Text>
                  <View
                    style={[
                      styles.checkbox,
                      enabled && styles.checkboxActive,
                    ]}
                  >
                    {enabled && (
                      <Ionicons name="checkmark" size={18} color="#fff" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Info Text */}
            <Text style={styles.infoText}>
              Select which channels you want to receive notifications through
            </Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "85%",
    maxWidth: 400,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  channelList: {
    marginBottom: 16,
  },
  channelItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  channelText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxActive: {
    backgroundColor: "#3cb371",
    borderColor: "#3cb371",
  },
  infoText: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
});