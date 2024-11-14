import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VoiceNoteItem = ({ item, onDelete, onPlay }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.timestamp}>{item.timestamp}</Text>
    <View style={styles.actions}>
      <Button title="Play" onPress={() => onPlay(item.uri)} />
      <Button title="Delete" onPress={() => onDelete(item.id)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
  timestamp: { fontSize: 14, color: 'gray' },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default VoiceNoteItem;
