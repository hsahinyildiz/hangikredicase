import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import FoodStack from './FoodStack';
import MarketStack from './MarketStack';
import { useAppSelector } from '../store/hooks';
import LoginScreen from '../screens/Login/LoginScreen';
import { Modal } from 'react-native';
import TabIcon from '../components/TabIcon';
import HomeIcon from '../assets/home.png';
import FoodIcon from '../assets/food.png';
import MarketIcon from '../assets/market.png';
import ProfileIcon from '../assets/profile.png';
import Colors from '../constants/Colors';
import { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  const { isLoggedIn } = useAppSelector(s => s.auth);
  const [loginVisible, setLoginVisible] = useState(false);

  const handleTabPress = (e: any) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setLoginVisible(true);
    }
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.Primary,
          tabBarInactiveTintColor: Colors.Gray,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={HomeIcon} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Yemek"
          component={FoodStack}
          listeners={{
            tabPress: handleTabPress,
          }}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={FoodIcon} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={MarketStack}
          listeners={{
            tabPress: handleTabPress,
          }}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={MarketIcon} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={ProfileIcon} focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
      <Modal
        visible={loginVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLoginVisible(false)}
      >
        <LoginScreen onClose={() => setLoginVisible(false)} />
      </Modal>
    </>
  );
};

export default TabNavigator;
