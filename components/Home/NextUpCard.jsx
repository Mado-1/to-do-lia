import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NextUpCard() {
  return (
    <View style={styles.nextUpCard}>
      <View style={styles.nextUpHeader}>
        <View style={styles.nextUpTitle}>
          <Ionicons name="notifications-outline" size={20} color="#6366F1" />
          <Text style={styles.nextUpText}>Next Up</Text>
        </View>
        <View style={styles.timeBadge}>
          <Text style={styles.timeBadgeText}>in 1d</Text>
        </View>
      </View>

      <Text style={styles.eventTitle}>Swimming Lesson</Text>

      <View style={styles.tagContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Svenska Lag</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Oscar</Text>
        </View>
      </View>

      <View style={styles.eventDetail}>
        <Ionicons name="time-outline" size={18} color="#666" />
        <Text style={styles.eventDetailText}>5:30 PM</Text>
      </View>

      <View style={styles.eventDetail}>
        <Ionicons name="location-outline" size={18} color="#EF4444" />
        <Text style={styles.eventDetailText}>Eriksdalsbadet</Text>
      </View>

      <View style={styles.leaveTimeContainer}>
        <Ionicons name="car-outline" size={18} color="#8B5CF6" />
        <Text style={styles.leaveTimeText}>Leave at 5:10 PM</Text>
      </View>

      <TouchableOpacity style={styles.calendarButton}>
        <Text style={styles.calendarButtonText}>View in Calendar</Text>
        <Ionicons name="arrow-forward" size={18} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nextUpCard: {
    margin: 16,
    padding: 20,
    backgroundColor: '#EEF2FF',
    borderRadius: 20,
    gap: 16,
  },
  nextUpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextUpTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nextUpText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  timeBadge: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  timeBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tagText: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },
  eventDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eventDetailText: {
    fontSize: 15,
    color: '#374151',
  },
  leaveTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  leaveTimeText: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '500',
  },
  calendarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  calendarButtonText: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '600',
  },
});