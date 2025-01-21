// NewTask.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const NewTask = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('12 Jan 2025 at 10:00 AM');

  const saveTask = () => {
    // Logic to save the task
    console.log('Task Saved:', { title, notes, date });
    navigation.navigate('Contacts'); // Navigate back to the previous screen
  };

  useEffect(() => {
    setTitle('')
    setNotes('')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Contacts')} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Task</Text>
        <TouchableOpacity onPress={saveTask} style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cancelButton: {
    padding: 8,
  },
  cancelText: {
    color: '#007BFF',
  },
  saveButton: {
    padding: 8,
  },
  saveText: {
    color: '#007BFF',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});
