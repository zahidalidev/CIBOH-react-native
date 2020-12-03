import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import {MaterialCommunityIcons} from "@expo/vector-icons"

import Story from '../components/Story';
import HomeSlider from '../components/HomeSlider';
import colors from '../config/colors';
import featureImg from "../assets/images/Ellipse5.png"

export default function Home() {

    let [fontsLoaded] = useFonts({
        'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
        'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
        'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
        });
    
    if(!fontsLoaded) {
        return null 
        }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <Story />
            <ScrollView style={styles.scrollView}>
                <View style={styles.belowStoryContainer} >
                    <HomeSlider />

                    <View style={styles.featuredContainer}>
                        <Text style={[styles.featureTitle, {fontFamily: 'ZermattFirst',}]} >
                            Featured Stories
                        </Text>
                        <View  style={styles.featuredStories}>
                            <Text style={[styles.featureHeading, {fontFamily: 'AvianoFlareRegular'}]} >
                                How to make {"\n\n"}
                                home made ice-cream
                            </Text>
                            <Image style={styles.featureImg} source={featureImg} />
                            <View style={styles.subHeading} >
                                <Text style={{fontFamily: 'sofiaprolight', color: colors.primary}} >
                                    Lisa-Krisin Erdt
                                </Text>
                                <View style={styles.likes} >
                                    <MaterialCommunityIcons name="heart" color={colors.primary} size={20} />
                                    <Text style={{ color: colors.primary, left: 7}} >275</Text>
                                </View>
                            </View>
                        </View>
                    </View>
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
    marginTop: Constants.statusBarHeight + 30,
    flexDirection: 'column'
  },
  scrollView: {
    // flex: 15,
    // justifyContent: 'center',
    // backgroundColor: 'pink',
    marginHorizontal: 20,
    },
    belowStoryContainer: {
        marginTop: 30
    },
    featuredStories: {
        flex: 1,
        backgroundColor: colors.secondary,
        flexDirection: 'row',
    },
    featureHeading: {
        // fontWeight: '900',
        padding: 25,
        fontSize: 13,
    },
    
    featureImg: {
        left: 17,
        alignSelf: 'flex-end', 
        top: -35
    },
    featureTitle: {
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: 0.02,
        textAlign: 'left',
        marginBottom: 10
    },
    subHeading: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 23,
        alignItems: 'center',
        left: 25
    },
    likes: {
        flexDirection: 'row',
        left: 60,
    }
});
