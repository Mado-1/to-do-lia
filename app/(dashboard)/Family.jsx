import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AddMemberModal from '../AddMemberModal';

const FamilySection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  // Gör familyMembers till state så vi kan uppdatera den
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      name: 'Emma',
      initials: 'EM',
      color: '#ec4899',
      role: 'Child',
      upcomingCount: 3,
      weeklyTime: '2h 40m',
      nextActivity: 'Soccer Practice',
      nextActivityDate: 'Fri, Nov 28, 04:00 PM'
    },
    {
      id: 2,
      name: 'Oscar',
      initials: 'OS',
      color: '#3b82f6',
      role: 'Child',
      upcomingCount: 3,
      weeklyTime: '4h 35m',
      nextActivity: 'Swimming Lesson',
      nextActivityDate: 'Thu, Nov 27, 05:30 PM'
    }
  ]);

  const sharedActivities = {
    count: 1,
    description: 'Activities that involve multiple family members'
  };

  // Uppdatera overview dynamiskt baserat på antal familjemedlemmar
  const overview = {
    totalMembers: familyMembers.length,
    activeActivities: 5,
    thisWeek: 5,
    totalHours: '6h'
  };

  // Funktion för att lägga till ny familjemedlem
  const handleAddMember = (newMember) => {
    setFamilyMembers([...familyMembers, newMember]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerIcon}>👥</Text>
          <View>
            <Text style={styles.headerTitle}>Family Members</Text>
            <Text style={styles.headerSubtitle}>Manage your family and view individual schedules</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Family Members */}
      {familyMembers.map((member) => (
        <View key={member.id} style={styles.memberCardContainer}>
          <TouchableOpacity style={styles.memberCard}>
            <View style={[styles.avatar, { backgroundColor: member.color }]}>
              <Text style={styles.avatarText}>{member.initials}</Text>
            </View>
            
            <View style={styles.memberContent}>
              <View style={styles.memberHeader}>
                <View>
                  <Text style={styles.memberName}>{member.name}</Text>
                  <Text style={styles.memberRole}>{member.role}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={() => {
                    if (confirm(`Remove ${member.name} from family?`)) {
                      setFamilyMembers(familyMembers.filter(m => m.id !== member.id));
                    }
                  }}
                >
                  <Text style={styles.deleteButtonText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statIcon}>📅</Text>
                <Text style={styles.statText}>{member.upcomingCount} upcoming</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statIcon}>🕐</Text>
                <Text style={styles.statText}>{member.weeklyTime} this week</Text>
              </View>
            </View>

            <View style={styles.nextActivity}>
              <Text style={styles.nextActivityIcon}>↗️</Text>
              <Text style={styles.nextActivityText}>Next: {member.nextActivity}</Text>
            </View>

            <View style={styles.activityCard}>
              <Text style={styles.activityLabel}>Next Activity</Text>
              <Text style={styles.activityTitle}>{member.nextActivity}</Text>
              <Text style={styles.activityDate}>{member.nextActivityDate}</Text>
            </View>
          </View>
        </TouchableOpacity>
        </View>
      ))}

      {/* Shared Activities */}
      <View style={styles.sharedCard}>
        <View style={[styles.avatar, { backgroundColor: '#8b5cf6' }]}>
          <Text style={styles.avatarText}>👥</Text>
        </View>
        
        <View style={styles.memberContent}>
          <Text style={styles.memberName}>Shared Activities</Text>
          <Text style={styles.memberRole}>Family Events</Text>
          
          <View style={styles.stat}>
            <Text style={styles.statIcon}>📅</Text>
            <Text style={styles.statText}>{sharedActivities.count} upcoming</Text>
          </View>

          <Text style={styles.sharedDescription}>{sharedActivities.description}</Text>
        </View>
      </View>

      {/* Family Overview */}
      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>Family Overview</Text>
        
        <View style={styles.overviewGrid}>
          <View style={[styles.overviewCard, { backgroundColor: '#dbeafe' }]}>
            <Text style={[styles.overviewLabel, { color: '#3b82f6' }]}>Total Members</Text>
            <Text style={[styles.overviewValue, { color: '#1e40af' }]}>{overview.totalMembers}</Text>
          </View>
          
          <View style={[styles.overviewCard, { backgroundColor: '#fce7f3' }]}>
            <Text style={[styles.overviewLabel, { color: '#ec4899' }]}>Active Activities</Text>
            <Text style={[styles.overviewValue, { color: '#be185d' }]}>{overview.activeActivities}</Text>
          </View>
          
          <View style={[styles.overviewCard, { backgroundColor: '#dcfce7' }]}>
            <Text style={[styles.overviewLabel, { color: '#22c55e' }]}>This Week</Text>
            <Text style={[styles.overviewValue, { color: '#15803d' }]}>{overview.thisWeek}</Text>
          </View>
          
          <View style={[styles.overviewCard, { backgroundColor: '#fed7aa' }]}>
            <Text style={[styles.overviewLabel, { color: '#f97316' }]}>Total Hours</Text>
            <Text style={[styles.overviewValue, { color: '#c2410c' }]}>{overview.totalHours}</Text>
          </View>
        </View>
      </View>

      <View style={{ height: 40 }} />

      {/* Add Member Modal */}
      <AddMemberModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddMember={handleAddMember}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  headerLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  headerIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '300',
  },
  memberCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  memberCardContainer: {
    marginBottom: 16,
  },
  memberHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fee2e2',
  },
  deleteButtonText: {
    fontSize: 18,
  },
  sharedCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  memberContent: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  memberRole: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  statsRow: {
    marginBottom: 8,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6b7280',
  },
  nextActivity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  nextActivityIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  nextActivityText: {
    fontSize: 14,
    color: '#6b7280',
  },
  activityCard: {
    backgroundColor: '#f0f9ff',
    padding: 12,
    borderRadius: 8,
  },
  activityLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3b82f6',
    marginBottom: 4,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  sharedDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
    lineHeight: 20,
  },
  overviewSection: {
    marginTop: 8,
    marginBottom: 16,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  overviewCard: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    minHeight: 80,
  },
  overviewLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  overviewValue: {
    fontSize: 32,
    fontWeight: '700',
  },
});

export default FamilySection;