import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import Constants from 'expo-constants';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Input } from "native-base"

import feedImg1 from "../assets/images/Rectangle8.png"
import feedImg2 from "../assets/images/Rectangle9.png"
import feedImg3 from "../assets/images/Rectangle18.png"
import feedImg4 from "../assets/images/Rectangle19.png"
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width;


function Search(props) {
    let [fontsLoaded] = useFonts({
    'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
    'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
    'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
    });
    
    
    const [value, setValue] = React.useState('');
    const [valueStatus, setValueStauts] = React.useState('');

    if(!fontsLoaded) {
        return null 
    }
    
    
    return (
        <SafeAreaView  style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.shopingContainer}>

                    <View style={{borderColor: colors.primary, alignItems: 'center', height: 55, borderWidth: 0.7, flexDirection: 'row', maxWidth:  '100%', minWidth:  '100%'}} >
                        <View style={{padding: 14}}>
                            <TextInput
                                secureTextEntry={(value.length <= 0 && valueStatus != 'onFocus') ? true : false}
                                style={{fontFamily: 'ZermattFirst', height: 40, fontSize:22, maxWidth:'87%', minWidth:'87%'}}
                                placeholderStyle={{fontFamily: 'ZermattFirst'}}
                                onChangeText={(value) => {
                                    setValue(value)
                                    setValueStauts('onFocus')
                                }}
                                value={value}
                                placeholder={'Type here to find some recipe'}
                                placeholderTextColor="#D8D8D8" />
                        </View>
                        <TouchableOpacity style={{width:40, height:40, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center'}} >
                            <MaterialCommunityIcons style={{opacity:0.9}} size={30} color="white" name="magnify" />
                        </TouchableOpacity>
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
        marginTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        // backgroundColor: 'red',
        width:'100%'
    },
    scrollView: {
        flex: 1,
        // justifyContent: 'center',
        width:'95%',

        // backgroundColor: 'pink',
        // marginHorizontal: 20,
    },
    shopingContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom:30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default Search;