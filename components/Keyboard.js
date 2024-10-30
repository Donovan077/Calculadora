import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import styles from '../styles';

const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', 'C', '0', '=', '/', 'CE'];

export default function Keyboard({ handlePress }) {
  return (
    <View style={styles.buttonsContainer}>
      {buttons.map((value) => (
        <Button key={value} value={value} handlePress={handlePress} />
      ))}
    </View>
  );
}
