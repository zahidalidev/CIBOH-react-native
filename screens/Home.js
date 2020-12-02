import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'


import Story from '../components/Story';
import HomeSlider from '../components/HomeSlider';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" backgroundColor="white" />
        <Story />
        <ScrollView style={styles.scrollView}>
           
            <View style={styles.belowStoryContainer} >
                <HomeSlider />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 10,
    flexDirection: 'column'
  },
  scrollView: {
    // flex: 15,
    // justifyContent: 'center',
    backgroundColor: 'pink',
    marginHorizontal: 20,
    },
    belowStoryContainer: {
        
    }
});
