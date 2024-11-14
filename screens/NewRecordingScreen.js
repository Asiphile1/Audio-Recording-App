import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { saveVoiceNotes, loadVoiceNotes } from '../utils/storage';

const NewRecordingScreen = ({ navigation }) => {
  const [recording, setRecording] = useState(null);
  const [title, setTitle] = useState('');

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) return;
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopRecording = async () => {
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    const timestamp = new Date().toLocaleString();

    const newVoiceNote = { id: Date.now().toString(), uri, title, timestamp };
    const existingNotes = await loadVoiceNotes();
    const updatedNotes = [newVoiceNote, ...existingNotes];
    await saveVoiceNotes(updatedNotes);

    setRecording(null);
    setTitle('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { padding: 10, borderBottomWidth: 1, marginBottom: 20 },
});

export default NewRecordingScreen;
