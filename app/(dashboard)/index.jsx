import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AIChatButton from "../../components/Global/AIChatButton";
import AIChatModal from "../../components/Global/AIChatModal";
import Header from "../../components/Global/Header";
import NextUpCard from "../../components/Home/NextUpCard";
import StatsGrid from "../../components/Home/StatsGrid";

export default function Dashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <AIChatButton onPress={() => setIsModalVisible(true)} isOpen={false} />
        <NextUpCard />
        <StatsGrid />
        <View style={{ height: 40 }} />
      </ScrollView>
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
    backgroundColor: "#F9FAFB",
  },
  scrollView: {
    flex: 1,
  },
});
