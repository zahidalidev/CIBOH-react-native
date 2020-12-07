import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import uploadCloudIcon from "../assets/images/cloudUpload.png"
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width;

function AddStep({ navigation }) {

    const handleImage = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                image: result,
            });
        }

    }
    const ingredients = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                image: result,
            });
        }

    }
    const untensil = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                image: result,
            });
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/* header */}
                <View style={{ backgroundColor: colors.secondary, width: "100%" }}>
                    <Text style={{ padding: 10, left: "2%", color: "white", maxWidth: "90%", fontFamily: "ZermattFirst", fontSize: RFPercentage(3) }} >Add step to help us out in your recipe</Text>
                </View>

                <View style={styles.recipeContainer}>

                    {/* Upload */}
                    <View style={{ left: '5%', flexDirection: 'column', width: "100%", backgroundColor: colors.feedBar, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ padding: '5%', alignItems: 'center' }} >
                            <Image source={uploadCloudIcon} maxWidth={100} maxHeight={100} />
                            <TouchableOpacity onPress={() => handleImage()}>
                                <Text style={{ fontSize: RFPercentage(2.3), fontFamily: 'AvianoFlareRegular' }} >Upload Photo or VIdeo</Text>
                            </TouchableOpacity>
                            <Text style={{ opacity: 0.7, color: 'grey', fontSize: RFPercentage(2), fontFamily: 'sofiaprolight' }} >Upload Photo or video of step</Text>
                        </View>
                    </View>

                    {/* feild */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Step Description</Text>
                            <TextInput style={{ marginTop: 25, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                    </View>


                    {/* Add ingredients */}
                    <View style={{ left: '5%', marginTop: "5%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Ingrdients Used</Text>
                        <TouchableOpacity onPress={() => ingredients()} style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius: 2, marginTop: 25, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)' }} >
                            <Text style={{ opacity: 1, padding: 20, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.5), color: colors.primary }}>Add Ingredients</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Steps */}
                    <View style={{ left: '5%', marginTop: "5%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Utensils Used</Text>
                        <TouchableOpacity onPress={() => untensil()} style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius: 2, marginTop: 25, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)' }} >
                            <Text style={{ opacity: 1, padding: 20, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.5), color: colors.primary }}>Add a Untensil</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Next Button */}
                    <View style={{ width: '100%', left: "5%", marginBottom: 20 }} >
                        <TouchableOpacity onPress={() => navigation.navigate('Payment')} style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: "13%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2), color: 'white' }} >Save</Text>
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
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: '100%'
    },
    scrollView: {
        flex: 1,
        width: '100%',
        // justifyContent: 'center',

        // marginHorizontal: 20,
        // backgroundColor: 'pink',
    },
    recipeContainer: {
        // backgroundColor: 'pink',
        width: '90%',
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom: 30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default AddStep;