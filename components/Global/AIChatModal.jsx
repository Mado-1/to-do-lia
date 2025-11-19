import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AIChatModal({ visible, onClose }) {
  const [message, setMessage] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Hello! I'm your family Chief of Staff AI.\nI can help you:",
      timestamp: "16:28",
      suggestions: [
        {
          icon: "✅",
          text: "Add activities (e.g., 'Add dentist appointment tomorrow at 3pm')",
        },
        { icon: "📅", text: "Check schedules and upcoming events" },
        { icon: "⚠️", text: "Find conflicts" },
        { icon: "🔴", text: "Manage checklists" },
      ],
    },
  ]);

  const quickActions = [
    { label: "Today's schedule", value: "today" },
    { label: "Conflicts", value: "conflicts" },
    { label: "+ Add activity", value: "add" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          type: "user",
          text: message,
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="robot-happy"
                  size={24}
                  color="#FFF"
                />
              </View>
              <View>
                <Text style={styles.headerTitle}>AI Assistant</Text>
                <Text style={styles.headerSubtitle}>Unstressable</Text>
              </View>
            </View>
            <View style={styles.headerButtons}>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => setIsMuted(!isMuted)} // Toggle mute state
              >
                <Ionicons
                  name={isMuted ? "volume-mute" : "volume-medium"}
                  size={20}
                  color="#FFF"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton} onPress={onClose}>
                <Ionicons name="close" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Chat Area */}
          <ScrollView
            style={styles.chatArea}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg) => (
              <View key={msg.id} style={styles.messageContainer}>
                {msg.type === "ai" ? (
                  <View style={styles.aiMessage}>
                    <Text style={styles.aiMessageText}>{msg.text}</Text>
                    {msg.suggestions && (
                      <View style={styles.suggestionsContainer}>
                        {msg.suggestions.map((suggestion, index) => (
                          <View key={index} style={styles.suggestion}>
                            <Text style={styles.suggestionIcon}>
                              {suggestion.icon}
                            </Text>
                            <Text style={styles.suggestionText}>
                              {suggestion.text}
                            </Text>
                          </View>
                        ))}
                      </View>
                    )}
                    <Text style={styles.suggestionPrompt}>
                      What can I help you with today?
                    </Text>
                    <Text style={styles.timestamp}>{msg.timestamp}</Text>
                  </View>
                ) : (
                  <View style={styles.userMessage}>
                    <Text style={styles.userMessageText}>{msg.text}</Text>
                    <Text style={styles.timestampUser}>{msg.timestamp}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            {/* Quick Actions */}
            <View style={styles.quickActions}>
              <Text style={styles.quickActionsLabel}>Quick actions:</Text>
              <View style={styles.quickActionsButtons}>
                {quickActions.map((action, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.quickActionButton}
                  >
                    <Text style={styles.quickActionText}>{action.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Input Area */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Ask me anything or use voice..."
                placeholderTextColor="#9CA3AF"
                value={message}
                onChangeText={setMessage}
                multiline
              />
              <TouchableOpacity style={styles.micButton}>
                <Ionicons name="mic" size={20} color="#6B7280" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Ionicons name="send" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
            <Text style={styles.voiceHint}>
              Type or click the microphone to speak
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7C3AED",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  headerContent: {
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
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.8)",
  },
  headerButtons: {
    flexDirection: "row",
    gap: 8,
  },
  headerButton: {
    padding: 8,
  },
  chatArea: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    marginBottom: 16,
  },
  aiMessage: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  aiMessageText: {
    fontSize: 14,
    color: "#1F2937",
    lineHeight: 20,
  },
  suggestionsContainer: {
    gap: 8,
  },
  suggestion: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  suggestionIcon: {
    fontSize: 14,
  },
  suggestionText: {
    fontSize: 13,
    color: "#4B5563",
    lineHeight: 18,
    flex: 1,
  },
  suggestionPrompt: {
    fontSize: 14,
    color: "#1F2937",
    fontWeight: "500",
    marginTop: 4,
  },
  timestamp: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 4,
  },
  userMessage: {
    backgroundColor: "#3B82F6",
    padding: 12,
    borderRadius: 12,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  userMessageText: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 20,
  },
  timestampUser: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 4,
    textAlign: "right",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFF",
  },
  quickActions: {
    marginBottom: 12,
  },
  quickActionsLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 8,
  },
  quickActionsButtons: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  quickActionButton: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  quickActionText: {
    fontSize: 13,
    color: "#374151",
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#1F2937",
    maxHeight: 80,
  },
  micButton: {
    padding: 8,
  },
  sendButton: {
    backgroundColor: "#9CA3AF",
    padding: 8,
    borderRadius: 8,
  },
  voiceHint: {
    fontSize: 11,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 8,
  },
});
