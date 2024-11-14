import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveVoiceNotes = async (voiceNotes) => {
  try {
    const jsonValue = JSON.stringify(voiceNotes);
    await AsyncStorage.setItem('voiceNotes', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const loadVoiceNotes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('voiceNotes');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
