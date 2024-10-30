import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  calculatorContainer: {
    width: '90%',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#9c9c9c',
  },
  resultContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#000',
  },
  resultText: {
    fontSize: 30,
  },
  historyContainer: {
    marginVertical: 10,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#000',
  },
  historyText: {
    fontSize: 20,
    color: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2c4cd8',
    padding: 20,
    margin: 5,
    borderRadius: 20,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#000',
  },
  specialButton: {
    backgroundColor: '#ff2c2c',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
