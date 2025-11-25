import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AIChatButtonV2 from "../../components/Global/AIChatButtonV2";
import AIChatModal from "../../components/Global/AIChatModal";
import Header from "../../components/Global/Header";

const Settings = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
return (
  <View style={{ flex: 1 }}>
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView style={styles.scrollView}>
        <Header/>
      </ScrollView>

      <AIChatButtonV2 onPress={() => setIsModalVisible(true)} isOpen={false} />
    </SafeAreaView>

    <AIChatModal
      visible={isModalVisible}
      onClose={() => setIsModalVisible(false)}
        style={{
  }}
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
});
