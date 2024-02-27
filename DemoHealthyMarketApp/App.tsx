import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes/routes';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <UserStoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.Home}>
          <Stack.Screen name={Routes.Home} component={HomeScreen} options={{ headerShown: false }}/>
        
        </Stack.Navigator>
      </NavigationContainer>
    // </UserStoreProvider>
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
