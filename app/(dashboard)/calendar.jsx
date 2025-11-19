import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Activities from "../../components/Calendar/Activities";
import TimelineCard from "../../components/Calendar/TimelineCard";
import AIChatButtonV2 from "../../components/Global/AIChatButtonV2";
import AIChatModal from "../../components/Global/AIChatModal";
import Header from "../../components/Global/Header";

export default function Calendar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <TimelineCard />
        <Activities />
      </ScrollView>

      <AIChatButtonV2 onPress={() => setIsModalVisible(true)} isOpen={false} />

      <AIChatModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  scrollView: {
    flex: 1,
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
});
