import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AIChatButtonV2 from "../../components/Global/AIChatButtonV2";
import AIChatModal from "../../components/Global/AIChatModal";
import Header from "../../components/Global/Header";
import BottomToast from "../../components/Settings/BottomToast";
import NotificationsSection from "../../components/Settings/NotificationSettings";

const Settings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message) => {
    setToastText(message);
    setToastVisible(true);

    setTimeout(() => setToastVisible(false), 1500);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <NotificationsSection onChannelToast={showToast} />
        </ScrollView>
        <BottomToast styles={styles.BottomToast} visible={toastVisible} message={toastText} />
        <AIChatButtonV2 styles={styles.AIChatButtonV2} onPress={() => setIsModalVisible(true)} isOpen={false} />
      </SafeAreaView>
      <AIChatModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  scrollView: {
    flex: 1,
  },
  AIChatButtonV2: {
    position: "absolute",
    zIndex: 10,
  },
  BottomToast: {
    position: "absolute",
    zIndex: 9,
  }
});
