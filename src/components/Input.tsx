import React, { forwardRef } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  returnKeyType?: TextInputProps['returnKeyType'];
  onSubmitEditing?: () => void;
  keyboardType?: TextInputProps['keyboardType'];
}

const Input = forwardRef<TextInput, Props>(
  (
    { value, onChangeText, placeholder, secureTextEntry, returnKeyType, onSubmitEditing, keyboardType = 'default' },
    ref
  ) => {
    return (
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#CCCCCC'}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize="none"
        style={styles.input}
      />
    );
  }
);

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
});
