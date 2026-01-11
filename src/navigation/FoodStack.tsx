import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodHome from '../screens/Food/FoodHome';
import FoodCart from '../screens/Food/FoodCart';
import { FoodStackParamList } from '../types/navigation';

const Stack = createStackNavigator<FoodStackParamList>();

const FoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="YemekHome" component={FoodHome} />
      <Stack.Screen name="YemekSepet" component={FoodCart} />
    </Stack.Navigator>
  );
}

export default FoodStack;