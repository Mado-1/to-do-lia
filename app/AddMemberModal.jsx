import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddMemberModal = ({ visible, onClose, onAddMember }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) return;

    const newMember = {
      id: Date.now(),
      name,
      initials: name.slice(0, 2).toUpperCase(),
      color: '#3b82f6',
      role: 'Child',
      upcomingCount: 0,
      weeklyTime: '0h',
      nextActivity: 'None',
      nextActivityDate: 'N/A',
    };

    onAddMember(newMember);
    setName('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Add Family Member</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter name..."
            value={name}
            onChangeText={setName}
          />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    padding: 12,
    marginRight: 10,
  },
  addBtn: {
    padding: 12,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default AddMemberModal;
