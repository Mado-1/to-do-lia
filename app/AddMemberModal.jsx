import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const AddMemberModal = ({ visible, onClose, onAddMember }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    role: '',
    favoriteActivity: '',
    color: '#ec4899',
    mood: '😊'
  });

  const colors = [
    { color: '#ec4899', name: 'Pink' },
    { color: '#3b82f6', name: 'Blue' },
    { color: '#8b5cf6', name: 'Purple' },
    { color: '#f59e0b', name: 'Orange' },
    { color: '#22c55e', name: 'Green' },
    { color: '#ef4444', name: 'Red' },
    { color: '#06b6d4', name: 'Cyan' },
    { color: '#f97316', name: 'Deep Orange' }
  ];

  const roles = ['Child', 'Parent', 'Teenager', 'Grandparent', 'Other'];

  const moods = ['😊', '🤩', '💪', '😎', '🥰', '😌', '🤗', '😴'];

  const activities = [
    '⚽ Soccer',
    '🏊 Swimming',
    '🎨 Arts & Crafts',
    '🎵 Music',
    '📚 Reading',
    '🏃 Running',
    '🧘 Yoga',
    '🎮 Gaming',
    '🍳 Cooking',
    '🎭 Theater'
  ];

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.role) {
      alert('Please fill in all required fields');
      return;
    }

    const newMember = {
      id: Date.now(),
      name: formData.name,
      initials: formData.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2),
      color: formData.color,
      age: parseInt(formData.age),
      role: formData.role,
      favoriteActivity: formData.favoriteActivity || '🎯 General',
      mood: formData.mood,
      upcomingCount: 0,
      weeklyTime: '0h 0m',
      nextActivity: 'No upcoming activities',
      nextActivityDate: ''
    };

    onAddMember(newMember);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      role: '',
      favoriteActivity: '',
      color: '#ec4899',
      mood: '😊'
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Add Family Member</Text>
              <Text style={styles.modalSubtitle}>Fill in the details below</Text>
            </View>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
            {/* Name Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter full name"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Age Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter age"
                value={formData.age}
                onChangeText={(text) => setFormData({ ...formData, age: text })}
                keyboardType="number-pad"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Role Selection */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Role *</Text>
              <View style={styles.roleGrid}>
                {roles.map((role) => (
                  <TouchableOpacity
                    key={role}
                    style={[
                      styles.roleButton,
                      formData.role === role && styles.roleButtonSelected
                    ]}
                    onPress={() => setFormData({ ...formData, role })}
                  >
                    <Text style={[
                      styles.roleButtonText,
                      formData.role === role && styles.roleButtonTextSelected
                    ]}>
                      {role}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Color Selection */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Profile Color</Text>
              <View style={styles.colorGrid}>
                {colors.map((item) => (
                  <TouchableOpacity
                    key={item.color}
                    style={[
                      styles.colorButton,
                      { backgroundColor: item.color },
                      formData.color === item.color && styles.colorButtonSelected
                    ]}
                    onPress={() => setFormData({ ...formData, color: item.color })}
                  >
                    {formData.color === item.color && (
                      <Text style={styles.colorCheckmark}>✓</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Mood Selection */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Current Mood</Text>
              <View style={styles.moodGrid}>
                {moods.map((mood) => (
                  <TouchableOpacity
                    key={mood}
                    style={[
                      styles.moodButton,
                      formData.mood === mood && styles.moodButtonSelected
                    ]}
                    onPress={() => setFormData({ ...formData, mood })}
                  >
                    <Text style={styles.moodEmoji}>{mood}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Favorite Activity Selection */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Favorite Activity</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.activityGrid}>
                  {activities.map((activity) => (
                    <TouchableOpacity
                      key={activity}
                      style={[
                        styles.activityButton,
                        formData.favoriteActivity === activity && styles.activityButtonSelected
                      ]}
                      onPress={() => setFormData({ ...formData, favoriteActivity: activity })}
                    >
                      <Text style={[
                        styles.activityButtonText,
                        formData.favoriteActivity === activity && styles.activityButtonTextSelected
                      ]}>
                        {activity}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Preview Card */}
            <View style={styles.previewSection}>
              <Text style={styles.label}>Preview</Text>
              <View style={styles.previewCard}>
                <View style={[styles.previewAvatar, { backgroundColor: formData.color }]}>
                  <Text style={styles.previewAvatarText}>
                    {formData.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'AA'}
                  </Text>
                  <View style={styles.previewMoodBadge}>
                    <Text style={styles.previewMoodEmoji}>{formData.mood}</Text>
                  </View>
                </View>
                <View style={styles.previewInfo}>
                  <Text style={styles.previewName}>{formData.name || 'Name'}</Text>
                  <Text style={styles.previewMeta}>
                    {formData.role || 'Role'} · {formData.age || '0'} years
                  </Text>
                  {formData.favoriteActivity && (
                    <View style={styles.previewTag}>
                      <Text style={styles.previewTagText}>{formData.favoriteActivity}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Footer Buttons */}
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.submitButton,
                (!formData.name || !formData.age || !formData.role) && styles.submitButtonDisabled
              ]}
              onPress={handleSubmit}
              disabled={!formData.name || !formData.age || !formData.role}
            >
              <Text style={styles.submitButtonText}>Add Member</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#6b7280',
  },
  modalContent: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1f2937',
  },
  roleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  roleButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  roleButtonSelected: {
    backgroundColor: '#dbeafe',
    borderColor: '#3b82f6',
  },
  roleButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  roleButtonTextSelected: {
    color: '#1e40af',
    fontWeight: '600',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  colorButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  colorButtonSelected: {
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  colorCheckmark: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  moodButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  moodButtonSelected: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
  },
  moodEmoji: {
    fontSize: 28,
  },
  activityGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  activityButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activityButtonSelected: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
  },
  activityButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  activityButtonTextSelected: {
    color: '#92400e',
    fontWeight: '600',
  },
  previewSection: {
    marginTop: 8,
  },
  previewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  previewAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  previewAvatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  previewMoodBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 2,
  },
  previewMoodEmoji: {
    fontSize: 16,
  },
  previewInfo: {
    flex: 1,
  },
  previewName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  previewMeta: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  previewTag: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  previewTagText: {
    fontSize: 12,
    color: '#92400e',
    fontWeight: '500',
  },
  modalFooter: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  submitButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default AddMemberModal;