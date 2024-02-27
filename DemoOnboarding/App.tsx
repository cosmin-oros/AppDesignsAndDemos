import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import { UserStoreProvider } from './contexts/UserContext';

export default function App() {
  return (
    <UserStoreProvider>
      <OnboardingScreen />
    </UserStoreProvider>
  );
}


