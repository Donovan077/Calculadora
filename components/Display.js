import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function Display({ input }) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{input}</Text>
    </View>
  );
}
