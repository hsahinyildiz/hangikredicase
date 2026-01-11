import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSession = async (data: any) => {
  await AsyncStorage.setItem('session', JSON.stringify(data));
};

export const loadSession = async () => {
  const json = await AsyncStorage.getItem('session');
  return json ? JSON.parse(json) : null;
};

export const clearSession = async () => {
  await AsyncStorage.removeItem('session');
};
