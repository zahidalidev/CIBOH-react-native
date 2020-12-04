import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons"

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
import Payment from './screens/Payment';

const Stack = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home">{(props) => <Home {...props} />}</Stack.Screen>
            <Stack.Screen name="Feed">{(props) => <Feed {...props} />}</Stack.Screen>
          </Stack.Navigator>
  );
}

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
    <>
      {/* <StatusBar style="auto" /> */}
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
      {/* <AddStep /> */}
      {/* <Payment /> */}
        
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="settings"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: 'Feed',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="settings"
                  color={color}
                  size={size}
                />
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </>
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
