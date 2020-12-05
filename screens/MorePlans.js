import React, {useState} from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Badge } from 'react-native-elements'


import diamond from "../assets/images/diamond.png"
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width;

function MorePlans(props) {

    const [easyFront, setEasyFront] = useState('black')
    const [easyBack, setEasyBack] = useState('white')

    const [mediumFront, setMediumFront] = useState('white')
    const [mediumBack, setMediumBack] = useState(colors.secondary)

    const [hardFront, setHardFront] = useState('white')
    const [hardBack, setHardBack] = useState(colors.secondary)

    const handleEasy = () => {
        setEasyFront('black')
        setEasyBack('white')

        setMediumFront('white')
        setMediumBack(colors.secondary)

        setHardFront('white')
        setHardBack(colors.secondary)
    }

    const handleMedium = () => {
        setEasyFront('white')
        setEasyBack(colors.secondary)

        setMediumFront('black')
        setMediumBack('white')

        setHardFront('white')
        setHardBack(colors.secondary)
    }

    const handleHard = () => {
        setEasyFront('white')
        setEasyBack(colors.secondary)

        setMediumFront('white')
        setMediumBack(colors.secondary)

        setHardFront('black')
        setHardBack('white')
    }
    

    const handleImage = async() => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
     
    }

    return (
       <SafeAreaView  style={styles.container}>
                <StatusBar style="auto" backgroundColor={colors.feedBar} />
                <View style={{top: 0, flexDirection: 'column', width:"100%", height: RFPercentage(25.2), justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: colors.feedBar}}>
            </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.recipeContainer}>
                            
                        <View style={{width: '100%', marginTop:10, alignItems: 'center'}} > 
                            <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.2)}} >one Place for all your recipes</Text>
                        </View>

                        <View style={{flexDirection: 'column', left: RFPercentage(0.5), marginTop: 40}} >
                            <View style={{flexDirection: 'row'}} >
                                <MaterialCommunityIcons color={colors.primary} name="star" size={15} style={{marginTop: 3}} />
                                <Text style={{marginLeft: 15, fontFamily: 'sofiaprolight', fontSize:RFPercentage(2.1)}} >Collect unlimited recipes from the web</Text>
                            </View>
                            <View style={{marginTop: 10, flexDirection: 'row'}} >
                                <MaterialCommunityIcons color={colors.primary} name="star" size={15} style={{marginTop: 3}} />
                                <Text style={{marginLeft: 15, fontFamily: 'sofiaprolight', fontSize:RFPercentage(2.1)}} >Cook recipes in optimized cooking mood </Text>
                            </View>
                            <View style={{marginTop: 10, flexDirection: 'row'}} >
                                <MaterialCommunityIcons color={colors.primary} name="star" size={15} style={{marginTop: 3}} />
                                <Text style={{marginLeft: 15, fontFamily: 'sofiaprolight', fontSize:RFPercentage(2.1)}} >Access recipes across all your devices</Text>
                            </View>
                        </View>

                        <View style={{width: '100%', marginTop:"7%", alignItems: 'center'}} > 
                            <Text style={{textAlign: 'center', color: 'black', fontFamily: 'sofiaprolight', fontSize:RFPercentage(1.7)}} >
                                By proceeding with the payment you accept our terms and conditions and confirm that you have read the right of withdrawal
                            </Text>
                        </View>

                        <View style={{padding: 20, borderRadius: 10,borderWidth: 2, borderColor:colors.primary, width: '98%', marginTop:"7%", alignItems: 'flex-start', flexDirection: 'column'}} >
                            <View>
                                <Text style={{fontSize: RFPercentage(2.1), fontFamily: 'AvianoFlareRegular', color: colors.primary}} >Yearly</Text>
                            </View> 
                            <View style={{flexDirection: 'row'}} >
                                <Text style={{marginTop: RFPercentage(0.8), fontSize: RFPercentage(2.1), fontFamily: 'AvianoFlareRegular', color: colors.primary}} >$24.99 / year</Text>
                                <TouchableOpacity >
                                    <MaterialCommunityIcons style={{marginLeft: RFPercentage(18.2)}} color={colors.primary} size={30} name="chevron-right" />
                                </TouchableOpacity>
                            </View> 
                            <View>
                                <Text style={{fontSize: RFPercentage(2.1), fontFamily: 'AvianoFlareRegular', color: colors.primary}} >Try 14 days for free!</Text>
                            </View>
                            
                            <View style={{ marginTop:"7%", alignItems: 'center'}} > 
                                <Text style={{textAlign: 'left', color: 'black', fontFamily: 'sofiaprolight', fontSize:RFPercentage(1.7)}} >
                                    The Trial period is only valid for first-time subscribers. You will be charged automatically after the trial period ends.
                                    unless the subscription is cancelled. The subscription itslef will automatically renew upon expiry, unless it is cancelled.   
                                </Text>
                            </View>
                        </View>

                        <View style={{borderWidth: 1.2, borderRadius: 1, borderColor: '#ddd', shadowOpacity: 0.4, padding: 20, borderRadius: 10, width: '98%', marginTop:"7%", alignItems: 'flex-start', flexDirection: 'column'}} >
                            <Badge
                                status="warning"
                                containerStyle={{ top: -RFPercentage(3.8), right: RFPercentage(1.4) }}
                                value={'You save 59%'}
                                textStyle={{fontSize: RFPercentage(2)}}
                                
                            />
                            <View>
                                <Text style={{fontSize: RFPercentage(2.1), fontFamily: 'AvianoFlareRegular', color: colors.primary}} >Monthly</Text>
                            </View> 
                            <View style={{flexDirection: 'row'}} >
                                <Text style={{marginTop: RFPercentage(0.8), fontSize: RFPercentage(2.1), fontFamily: 'AvianoFlareRegular', color: colors.primary}} >$4.99 / month</Text>
                                <TouchableOpacity >
                                    <MaterialCommunityIcons style={{marginLeft: RFPercentage(18.2)}} color={colors.primary} size={30} name="chevron-right" />
                                </TouchableOpacity>
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
        // paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        // backgroundColor: 'red',
        width:'100%'
    },
    scrollView: {
        flex: 1,
        width:'90%',
        // justifyContent: 'center',

        // marginHorizontal: 20,
        // backgroundColor: 'pink',
    },
    recipeContainer: {
        // backgroundColor: 'pink',
        // width:'90%',
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom:30,
        right: '5%',
        left: RFPercentage(0.3),
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default MorePlans;