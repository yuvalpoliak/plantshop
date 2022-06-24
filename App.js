import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import TopBar from './components/topBar/TopBar';
import { Provider as PaperTheme } from 'react-native-paper';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar style='dark' backgroundColor='white'/>
      <PaperTheme>
      
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
      </PaperTheme>
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
