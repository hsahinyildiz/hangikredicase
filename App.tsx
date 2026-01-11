import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import RNBootSplash from "react-native-bootsplash";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
        <Toast />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
