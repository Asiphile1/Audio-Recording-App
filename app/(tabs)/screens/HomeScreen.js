import React, { useState, useEffect } from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import VoiceNoteList from "../../../components/VoiceNoteList";
import { Audio } from "expo-av";
import { loadVoiceNotes, saveVoiceNotes } from "../../../utils/storage";

const HomeScreen = ({ navigation }) => {
  const [voiceNotes, setVoiceNotes] = useState([]);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const fetchVoiceNotes = async () => {
      const data = await loadVoiceNotes();
      setVoiceNotes(data);
    };
    fetchVoiceNotes();
  }, []);

  const deleteVoiceNote = async (id) => {
    const updatedNotes = voiceNotes.filter((note) => note.id !== id);
    setVoiceNotes(updatedNotes);
    await saveVoiceNotes(updatedNotes);
  };

  const playVoiceNote = async (uri) => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button
        title="New Voice Note"
        onPress={() => navigation.navigate("NewRecording")}
      />
      <VoiceNoteList
        voiceNotes={voiceNotes}
        onDelete={deleteVoiceNote}
        onPlay={playVoiceNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default HomeScreen;
