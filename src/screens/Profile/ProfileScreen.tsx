import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';
import { clearSession } from '../../utils/storage';
import Button from '../../components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { RootTabParamList } from '../../types/navigation';
import Colors from '../../constants/Colors';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  const handleLogout = () => {
    dispatch(logout());
    clearSession();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
    Toast.show({
      type: 'success',
      text1: 'Çıkış başarılı.'
    });
  };

  if (!user) {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Profil</Text>
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <Button style={styles.button} title="Çıkış Yap" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.Dark
  },
  email: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.Gray
  },
  button: {
    marginTop: 20
  }
});

export default ProfileScreen;
