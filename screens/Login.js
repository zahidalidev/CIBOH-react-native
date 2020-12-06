import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import logo from "../assets/images/loginLogo.png";
import colors from '../config/colors';

function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="#E8D5D4" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.shopingContainer}>
                    {/* logo */}
                    <View style={{ flex: 1, top: "30%", flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <Image source={logo} />
                    </View>

                    {/* welcome */}
                    <View style={{ marginTop: "45%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: RFPercentage(4.2), color: colors.primary, fontFamily: 'ZermattFirst' }} >Welcome Sarah</Text>
                        <Text style={{ maxWidth: 330, fontSize: RFPercentage(2.1), marginTop: 6, fontFamily: 'sofiaprolight' }} >Try out different dishes, create your own recipe and share them with others</Text>
                    </View>

                    {/* input feilds */}
                    <View style={{ marginTop: "13%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.8) }} >Email</Text>
                            <TextInput style={{ fontSize: 17, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        <View style={{ marginTop: "7%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.8) }} >Password</Text>
                            <TextInput style={{ fontSize: 17, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        <TouchableOpacity style={{ marginTop: "2%" }} >
                            <Text numberOfLines={1} style={{ borderBottomWidth: 1, borderBottomColor: colors.primary, marginLeft: "72%", color: colors.primary, fontFamily: 'sofiaprolight', fontSize: RFPercentage(1.7) }} >Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')} style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: "13%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2.1), color: 'white' }} >Sign in</Text>
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
        backgroundColor: '#E8D5D4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        width: '100%'
    },
    scrollView: {
        // backgroundColor: 'red',
        flex: 1,

        width: '90%',
    },

    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom: 30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

export default Login;