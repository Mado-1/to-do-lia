import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatCard from './StatCard';

export default function StatsGrid() {
  return (
    <View style={styles.statsGrid}>
      <StatCard
        icon="calendar-outline"
        label="Today"
        value="0"
        backgroundColor="#EEF2FF"
        iconBackgroundColor="#C7D2FE"
        iconColor="#6366F1"
      />
      <StatCard
        icon="trending-up-outline"
        label="This Week"
        value="5"
        backgroundColor="#FBF5FF"
        iconBackgroundColor="#E9D5FF"
        iconColor="#A855F7"
      />
      <StatCard
        icon="people-outline"
        label="Family"
        value="2"
        backgroundColor="#F0FDF4"
        iconBackgroundColor="#BBF7D0"
        iconColor="#22C55E"
      />
      <StatCard
        icon="checkmark-circle-outline"
        label="Conflicts"
        value="0"
        backgroundColor="#FFF7ED"
        iconBackgroundColor="#FED7AA"
        iconColor="#F97316"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
});