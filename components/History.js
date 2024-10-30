import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles';

export default function History({ history }) {
  return (
    <View style={styles.historyContainer}>
      <ScrollView>
        {history.map((item, index) => (
          <Text key={index} style={styles.historyText}>{item.input} = {item.result}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
