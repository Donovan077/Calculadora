import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const specialButtons = ['+', '-', 'x', '/', 'C', 'CE'];

export default function Button({ value, handlePress }) {
  const buttonStyle = specialButtons.includes(value) ? styles.specialButton : styles.button;

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}
