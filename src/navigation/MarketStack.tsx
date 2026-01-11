import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MarketHome from '../screens/Market/MarketHome';
import MarketCart from '../screens/Market/MarketCart';

const Stack = createStackNavigator();

const MarketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MarketHome" component={MarketHome} />
      <Stack.Screen name="MarketSepet" component={MarketCart} />
    </Stack.Navigator>
  );
}

export default MarketStack