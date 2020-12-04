import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome,MaterialCommunityIcons, SimpleLineIcons, Feather} from "@expo/vector-icons"

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
import colors from './config/colors';


LogBox.ignoreAllLogs()

const Stack = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{
            style:{height:75, fontSize: 40},
            labelStyle: {fontSize: 14, fontWeight: '500', marginBottom:14}, 
            activeTintColor: colors.primary, inactiveTintColor:'#C3C3C3', tabStyle: { backgroundColor:"white", fontSize: 40}
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  style={{marginTop:13}}
                  name="home"
                  color={color}
                  size={size+10}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <SimpleLineIcons
                  style={{marginTop:13}}
                  name="magnifier"
                  color={color}
                  size={size+4}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CreateRecipe"
            component={CreateRecipe}
            options={{
              tabBarLabel: 'Create',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  style={{marginTop:13}}
                  name="file-document-edit-outline"
                  color={color}
                  size={size+4}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ShopingList"
            component={ShopingList}
            options={{
              tabBarLabel: 'Shoping',
              tabBarIcon: ({ color, size }) => (
                <Feather
                  style={{marginTop:13}}
                  name="shopping-bag"
                  color={color}
                  size={size+4}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome
                  style={{marginTop:13}}
                  name="user-o"
                  color={color}
                  size={size+4}
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
