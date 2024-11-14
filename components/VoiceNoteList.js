import React from 'react';
import { FlatList } from 'react-native';
import VoiceNoteItem from './VoiceNoteItem';

const VoiceNoteList = ({ voiceNotes, onDelete, onPlay }) => (
  <FlatList
    data={voiceNotes}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <VoiceNoteItem item={item} onDelete={onDelete} onPlay={onPlay} />
    )}
  />
);

export default VoiceNoteList;
