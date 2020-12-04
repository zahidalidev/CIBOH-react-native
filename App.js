import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'


import Feed from './screens/Feed';
import Home from './screens/Home';
import Search from './screens/Search';
import ShopingList from './screens/ShopingList';
import ShopingList_1 from './screens/ShopingList_1';
import Login from './screens/Login';
import CreateRecipe from './screens/CreateRecipe';
import CreateRecipe_1 from './screens/CreateRecipe_1';
import CreateRecipe_2 from './screens/CreateRecipe_2';
import CreateRecipe_3 from './screens/CreateRecipe_3';
import AddIngrdient from './screens/AddIngrdient';
import AddStep from './screens/AddStep';


export default function App() {
  let [fontsLoaded] = useFonts({
  'ZermattFirst': require('./assets/fonts/ZermattFirst.otf'),
  'AvianoFlareRegular': require('./assets/fonts/AvianoFlareRegular.otf'),
  'sofiaprolight': require('./assets/fonts/sofiaprolight.otf'),
  });

  if(!fontsLoaded) {
        return null 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Home /> */}
      {/* <Feed /> */}
      {/* <ShopingList /> */}
      {/* <ShopingList_1 /> */}
      {/* <Search /> */}
      {/* <Login /> */}
      {/* <CreateRecipe /> */}
      {/* <CreateRecipe_1 /> */}
      {/* <CreateRecipe_2 /> */}
      {/* <CreateRecipe_3 /> */}
      {/* <AddIngrdient /> */}
      <AddStep />
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
