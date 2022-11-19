import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GlobalLoading from './src/components/GlobalLoading';
import Overlay from './src/components/Overlay';
import MainStackNavigator from './src/nav/MainStackNavigator';
import { SharedContextProvider } from './src/utils/sharedContext/SharedContext';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <SharedContextProvider>
        <StatusBar
          barStyle={'light-content'}
        />
        <MainStackNavigator />
        <Overlay />
        <GlobalLoading />
      </SharedContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
