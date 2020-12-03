import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import Constants from 'expo-constants';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Input } from "native-base"

import breakfast from "../assets/images/breakfast.png"
import dessert from "../assets/images/dessert.png"
import dinner from "../assets/images/dinner.png"
import drink from "../assets/images/drink.png"
import lunch from "../assets/images/lunch.png"
import quizk from "../assets/images/quizk.png"


import colors from '../config/colors';
import IconBox from '../components/IconBox';

const screenWidth = Dimensions.get('window').width;


function Search(props) {
   
    
    const [value, setValue] = React.useState('');
    const [valueStatus, setValueStauts] = React.useState('');
    
    return (
        <SafeAreaView  style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.shopingContainer}>

                    {/* search Feild */}
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
                    
                    {/* what do you want to eat 1*/}
                    <View>
                        <Text style={{fontFamily: 'ZermattFirst', fontSize: 27, marginTop:30}} >What do you want to eat?</Text>
                    </View>
                    <View style={{flexDirection: 'column', marginTop:20}}>
                        <View style={{flexDirection: 'row', marginLeft:-10}}>
                            <IconBox picture={drink} title={'Drinks'} />
                            <IconBox picture={quizk} title={'Quick Bites'} />
                            <IconBox picture={breakfast} title={'Breakfast'} />
                        </View>
                        <View style={{flexDirection: 'row', marginLeft:-10, marginTop: 20}}>
                            <IconBox picture={lunch} title={'Lunch'} />
                            <IconBox picture={dinner} title={'Dinner'} />
                            <IconBox picture={dessert} title={'Dessert'} />
                        </View>
                    </View>

                    {/* what do you want to eat 2*/}
                    <View>
                        <Text style={{fontFamily: 'ZermattFirst', fontSize: 27, marginTop:30}} >What do you want to eat?</Text>
                    </View>

                    <View style={{flexDirection: 'row'}} >
                        <View style={styles.background} >
                            <View style={{right: 10,}} >
                                <MaterialCommunityIcons size={40} color={colors.primary} name="clock-outline" />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{ fontSize: 25 ,fontFamily: 'ZermattFirst', color: colors.primary}} >30 min</Text>
                                <Text style={{fontSize: 25 ,fontFamily: 'ZermattFirst', color: colors.primary}} >or less</Text>
                            </View>
                        </View>
                        <View style={[styles.background, {left: 15}]} >
                            <View style={{right: 10,}} >
                                <MaterialCommunityIcons size={40} color={colors.primary} name="clock-outline" />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{ fontSize: 25 ,fontFamily: 'ZermattFirst', color: colors.primary}} >More than</Text>
                                <Text style={{fontSize: 25 ,fontFamily: 'ZermattFirst', color: colors.primary}} >30 min</Text>
                            </View>
                        </View>
                    </View>
                                
                    {/* Select your cooking level*/}
                    <View>
                        <Text style={{fontFamily: 'ZermattFirst', fontSize: 27, marginTop:30}} >Select your cooking level</Text>
                    </View>
                    
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}} >
                            <View style={styles.background2} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Child Friendly</Text>
                                </View>
                            </View>
                            <View style={[styles.background2, {marginLeft:10}]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Easy</Text>
                                </View>
                            </View>
                            <View style={[styles.background2, {marginLeft:10}]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Moderate</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={[styles.background2, {marginTop: 10}]} >
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Advance</Text>
                            </View>
                        </View>
                    </View>

                     {/* Select your health goal*/}
                    <View>
                        <Text style={{fontFamily: 'ZermattFirst', fontSize: 27, marginTop:30}} >Select your health goal</Text>
                    </View>

                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}} >
                            <View style={styles.background3} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >No Preference</Text>
                                </View>
                            </View>
                            <View style={[styles.background3, {marginLeft:10}]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >500 cals or less</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: -10}} >
                            <View style={styles.background2} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Dairy Free</Text>
                                </View>
                            </View>
                            <View style={[styles.background2, {marginLeft:10}]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Gluten Free</Text>
                                </View>
                            </View>
                            <View style={[styles.background2, {marginLeft:10}]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Low Carb</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={{flexDirection: 'row', marginTop: -10}} >
                            <View style={[styles.background2]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Plant Based</Text>
                                </View>
                            </View>
                            <View style={[styles.background2, {marginLeft:10}]} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 20 ,fontFamily: 'ZermattFirst', color: colors.primary}} >Vegetarian</Text>
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
    background: {
        width:(screenWidth/2) - 25, height: 110,
        // paddingHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row', backgroundColor: 'rgba(232, 213, 212, 0.7);',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background2: {
        width:(screenWidth/3) - 20, height: 80,
        // paddingHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row', backgroundColor: 'rgba(232, 213, 212, 0.7);',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background3: {
        width:(screenWidth/2) - 60, height: 80,
        // paddingHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row', backgroundColor: 'rgba(232, 213, 212, 0.7);',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Search;