import React, { useState } from 'react';
import { View } from 'react-native';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import History from './components/History';
import styles from './styles';

export default function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const result = eval(input.replace('x', '*'));
        setHistory([...history, { input: input, result: result }]);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'CE') {
      setHistory([]);
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculatorContainer}>
        <Display input={input} />
        <History history={history} />
        <Keyboard handlePress={handlePress} />
      </View>
    </View>
  );
}
