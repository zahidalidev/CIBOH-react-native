import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker';
import { Fontisto, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Badge } from 'react-native-elements'


import diamond from "../assets/images/diamond.png"
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width;

function Settings({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor={'white'} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.recipeContainer}>

                    {/* header */}
                    <View style={{ flexDirection: 'row', flex: 1, width: "95%", marginTop: RFPercentage(1) }} >
                        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ flexDirection: 'row', width: "100%", justifyContent: 'flex-start', alignItems: 'center' }}>
                            <MaterialCommunityIcons size={20} name="chevron-left" />
                            <Text style={{ fontWeight: '700', fontSize: RFPercentage(2) }} >Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, width: "95%", marginTop: RFPercentage(2) }} >
                        <TouchableOpacity style={{ width: "60%", justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: RFPercentage(3) }} >Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "40%", justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={{ fontSize: RFPercentage(2.3), alignSelf: 'flex-end' }} >Done</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Profile */}
                    <View style={{ marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(3) }} >
                        <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(2), fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.9) }} >Name</Text>
                        </View>
                    </View>

                    <View style={{ paddingBottom: RFPercentage(1.5), flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%" }} >
                        <View style={{ marginLeft: RFPercentage(2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.secondary }} >
                            <Text style={{ paddingLeft: RFPercentage(4), paddingRight: RFPercentage(4), padding: RFPercentage(3), fontFamily: 'ZermattFirst', fontSize: RFPercentage(6) }} >U</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: RFPercentage(2), marginTop: RFPercentage(3) }}>
                            <Text style={{ fontWeight: '700', color: colors.tertiary, lineHeight: 25, fontSize: RFPercentage(3), maxWidth: 190, minWidth: 210, maxHeight: 42 }} >Utah</Text>
                            <TouchableOpacity>
                                <Text style={{ marginTop: RFPercentage(1), fontFamily: 'sofiaprolight', fontSize: RFPercentage(2), color: 'black' }} >Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Upgrade plan box */}
                    <View style={{ borderRadius: 5, marginTop: RFPercentage(3), marginLeft: "5%", flexDirection: 'column', width: "90%", backgroundColor: colors.feedBar, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ padding: '5%', alignItems: 'center' }} >
                            <View>
                                <Text style={{ color: colors.primary, fontSize: RFPercentage(3.7), fontFamily: 'sofiaprolight' }} >Upgrade to Premium</Text>
                            </View>

                            <View style={{ width: "90%", marginTop: RFPercentage(2) }} >
                                <Text style={{ textAlign: 'center', color: 'grey', fontSize: RFPercentage(2), fontFamily: 'sofiaprolight' }} >
                                    Search collect and save unlimted recipes
                                    from all around the web to your kitchen Stories cookbooks
                                </Text>
                            </View>

                            <View style={{ width: '100%', marginTop: RFPercentage(2) }} >
                                <TouchableOpacity style={{ borderRadius: 7, backgroundColor: colors.primary, alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'sofiaprolight', padding: RFPercentage(1.5), paddingLeft: RFPercentage(3), paddingRight: RFPercentage(3), fontSize: RFPercentage(2.3), color: 'white' }} >Unlock Premium</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Account */}
                    <View style={{ marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(3) }} >
                        <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(2), fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.9) }} >Account</Text>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginLeft: RFPercentage(2), marginBottom: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Current Plan</Text>
                        </View>
                        <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontWeight: 'bold', color: '#bcb8b8', marginLeft: RFPercentage(3), marginBottom: RFPercentage(1), fontSize: RFPercentage(2.2) }} >Free</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Badge
                                status="warning"
                                containerStyle={{ marginRight: RFPercentage(25) }}
                                value={'Try Premium'}
                                textStyle={{ fontSize: RFPercentage(1.8) }}
                                badgeStyle={{ height: 25, width: 100 }}
                            />
                        </View>
                        <TouchableOpacity style={{ marginLeft: RFPercentage(4.3), justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </TouchableOpacity>
                    </View>



                    {/* System */}
                    <View style={{ marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(3) }} >
                        <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(2), fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.9) }} >System</Text>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <Fontisto size={20} name="world-o" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Languages</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <MaterialCommunityIcons size={20} name="timer-sand" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Measurement System</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <MaterialCommunityIcons size={20} name="play-circle-outline" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Video Autoplay</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <MaterialCommunityIcons size={20} name="bell-outline" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Notifications</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </View>
                    </View>


                    {/* More */}
                    <View style={{ marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(3) }} >
                        <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(2), fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.9) }} >More</Text>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <MaterialCommunityIcons size={20} name="file-delimited-outline" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Recipe creation FAQS</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <AntDesign size={20} name="infocirlceo" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >About us</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10, marginBottom: RFPercentage(1.5), borderBottomWidth: 2, borderBottomColor: '#eae5e5', flexDirection: 'row', flex: 1, width: "100%", marginTop: RFPercentage(0.5) }} >
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row' }}>
                            <AntDesign size={20} name="like2" />
                        </View>
                        <View style={{ width: Platform.OS === 'ios' ? RFPercentage(45) : RFPercentage(40) }}>
                            <Text style={{ marginBottom: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2.1) }} >Recommend App</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons color={'#bcb8b8'} size={25} name="chevron-right" />
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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
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