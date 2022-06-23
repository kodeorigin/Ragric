import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/navigation/StackNavigator';


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StackNavigator />
    <StatusBar style="dark" />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
