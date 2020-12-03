import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed';
import Home from './screens/Home';
import ShopingList from './screens/ShopingList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Home /> */}
      {/* <Feed /> */}
      <ShopingList />
    </View>
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
