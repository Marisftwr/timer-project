import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ModoContagem } from './context/ModoContext';
import Home from './Pages/Home'

export default function App() {
  return (
    <ModoContagem>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ModoContagem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A37BA7',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
