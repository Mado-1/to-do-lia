import { Tabs } from "expo-router";
import { Calendar, House, Settings } from 'lucide-react-native';
import { color } from "../../constants/theme";

const DashborardLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        tabBarIcon: () => <House size={28} color={color}/>
        }} />
      <Tabs.Screen
      name="calendar"
      options={{
        title: "Calendar",
        tabBarIcon: () => <Calendar size={28} color={color}/>
        }} />
      <Tabs.Screen
      name="settings"
      options={{
        title: "Settings",
        tabBarIcon: () => <Settings size={28} color={color}/>
        }} />
    </Tabs>
  );
};

export default DashborardLayout;
