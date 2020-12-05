import React, {useState} from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker';
import {Fontisto, MaterialCommunityIcons} from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Badge } from 'react-native-elements'


import diamond from "../assets/images/diamond.png"
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width;

function Settings(props) {


    return (
       <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor={'white'} />
            <ScrollView style={styles.scrollView}>
                <View style={styles.recipeContainer}>
                    <View style={{flexDirection: 'row', flex: 1, width:"95%", marginTop: RFPercentage(1)}} >
                        <TouchableOpacity style={{flexDirection: 'row', width:"100%", justifyContent: 'flex-start', alignItems: 'center'}}>
                            <MaterialCommunityIcons size={20} name="chevron-left" />
                            <Text style={{fontWeight: '700' , fontSize: RFPercentage(2)}} >Search</Text>
                        </TouchableOpacity>
                    </View>                    
                    <View style={{flexDirection: 'row', flex: 1, width:"95%", marginTop: RFPercentage(2)}} >
                        <TouchableOpacity style={{width:"60%", justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Text style={{ fontSize: RFPercentage(3)}} >Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:"40%", justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{ fontSize: RFPercentage(2.3), alignSelf: 'flex-end'}} >Done</Text>
                        </TouchableOpacity>
                    </View>      

                    <View style={{marginBottom: RFPercentage(1.5),borderBottomWidth:2, borderBottomColor:'#eae5e5', flexDirection: 'row', flex: 1, width:"100%", marginTop: RFPercentage(3)}} >
                        <View style={{flexDirection: 'row', width:"100%", justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={{marginBottom: RFPercentage(1),marginLeft: RFPercentage(2), fontFamily: 'ZermattFirst', fontSize: RFPercentage(3.4)}} >Name</Text>
                        </View>
                    </View>       

                    <View style={{paddingBottom: RFPercentage(1.5), flexDirection: 'row', borderBottomWidth: 2, borderBottomColor:'#eae5e5', flexDirection: 'row', flex: 1, width:"100%"}} >
                        <View style={{marginLeft:RFPercentage(2), borderRadius: 10,justifyContent: 'center', alignItems: 'center', backgroundColor: colors.secondary}} >
                            <Text style={{paddingLeft: RFPercentage(4), paddingRight: RFPercentage(4), padding: RFPercentage(3), fontFamily: 'ZermattFirst', fontSize: RFPercentage(6)}} >U</Text>
                        </View>
                        <View style={{flexDirection: 'column', marginLeft:RFPercentage(2), marginTop: RFPercentage(3)}}>
                            <Text style={{fontWeight:'700', color: colors.tertiary, lineHeight:25, fontSize:RFPercentage(3), maxWidth: 190, minWidth:210, maxHeight: 42}} >Utah</Text>
                            <TouchableOpacity>
                                <Text style={{marginTop: RFPercentage(1), fontFamily: 'sofiaprolight', fontSize:RFPercentage(2), color:'black'}} >Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>     

                    <View style={{marginBottom: RFPercentage(1.5),borderBottomWidth:2, borderBottomColor:'#eae5e5', flexDirection: 'row', flex: 1, width:"100%", marginTop: RFPercentage(3)}} >
                        <View style={{flexDirection: 'row', width:"100%", justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={{marginBottom: RFPercentage(1),marginLeft: RFPercentage(2), fontFamily: 'ZermattFirst', fontSize: RFPercentage(3.4)}} >System</Text>
                        </View>
                    </View>

                    <View style={{paddingBottom: 10, marginBottom: RFPercentage(1.5),borderBottomWidth:2, borderBottomColor:'#eae5e5', flexDirection: 'row', flex: 1, width:"100%", marginTop: RFPercentage(0.5)}} >
                        <View style={{marginLeft:RFPercentage(2) ,flexDirection: 'row'}}>
                            <Fontisto size={25} name="world-o" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40)}}>
                            <Text style={{marginBottom: RFPercentage(1),marginLeft: RFPercentage(1), fontSize: RFPercentage(2.8)}} >System</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <MaterialCommunityIcons size={30} name="chevron-right" />
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
        flexDirection: 'column',
        width:'100%'
    },
    scrollView: {
        flex: 1,
    },
    recipeContainer: {
        flex: 1,
        flexDirection: 'column',
        // marginTop: 40,
        // marginBottom:30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default Settings;