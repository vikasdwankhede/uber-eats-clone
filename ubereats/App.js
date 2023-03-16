import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
