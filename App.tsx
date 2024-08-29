import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Navigation from './src/stacks/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container} edges={['top','left','right']}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
});

export default App;
