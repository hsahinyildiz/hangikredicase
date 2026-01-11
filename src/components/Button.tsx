import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({ title, onPress, loading = false, disabled = false, style, textStyle }: Props) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.btn,
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={!isDisabled ? onPress : undefined}
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color="#fff" size="small" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4a49bb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  disabled: {
    opacity: 0.6
  }
});
