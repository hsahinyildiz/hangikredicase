import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useAppDispatch } from '../store/hooks';
import { loadSession } from '../utils/storage';
import { restoreSession } from '../store/slices/authSlice';
import Colors from '../constants/Colors';

const AppNavigator = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const session = await loadSession();
      if (session) {
        dispatch(restoreSession(session));
      }
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={Colors.Primary} size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
