import * as React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import LoginInput from './pages/LoginInput.tsx';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginInput />
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
