import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.description}>Hoş geldin! Yemek veya Market sekmesine geçerek işlem yapabilirsin.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.Dark
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.Gray
  }
});

export default HomeScreen