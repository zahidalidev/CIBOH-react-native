import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'

import uploadCloudIcon from "../assets/images/cloudUpload.png"
import colors from '../config/colors';

function CreateRecipe(props) {
   return (
       <SafeAreaView  style={styles.container}>
                <StatusBar style="auto" backgroundColor="white" />
                <ScrollView style={styles.scrollView}>
                    {/* header */}
                    <View style={{backgroundColor: colors.secondary, width:"100%"}}>
                        <Text style={{padding: 10, left: "2%", color: "white", maxWidth: "90%",fontFamily: "ZermattFirst", fontSize:30}} >We are exited to see your recipe! Lets start with basics ...</Text>
                    </View>

                    <View style={styles.recipeContainer}>

                        {/* Upload */}
                        <View style={{left: '5%', flexDirection: 'column', width:"100%", backgroundColor: colors.feedBar, justifyContent: 'center', alignItems: 'center'}}>
                           <View style={{padding: '5%', alignItems: 'center'}} >
                            <Image source={uploadCloudIcon} maxWidth={100} maxHeight={100} />
                            <Text style={{fontSize: 27, fontFamily: 'AvianoFlareRegular'}} >Upload Photo</Text>
                            <Text style={{opacity: 0.7  , color: 'grey',fontSize: 17, fontFamily: 'sofiaprolight'}} >Click here for upload cover photo.</Text>
                           </View>
                        </View>

                        {/* feild */}
                        <View style={{ left: '5%', marginTop: "10%", width:"100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Name your recipe</Text>
                                <TextInput style={{marginTop: 5, fontSize:20 ,minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1}} />
                            </View>
                        </View>

                        {/* Buttons */}
                        <View style={{ left: '5%', marginTop: "10%", width:"97%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Difficulty</Text>
                                
                                <View style={{flexDirection: 'row', marginTop: "5%"}} >
                                    <TouchableOpacity style={{alignItems: 'center', width: "28%", backgroundColor: 'whtie', borderWidth: 4, borderColor: colors.secondary}} >
                                        <Text style={{color: 'black', fontFamily: 'ZermattFirst', fontSize:22, padding: 5}}>Easy</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft: "8.8%",alignItems: 'center', width: "28%", backgroundColor: 'whtie', borderWidth: 4, borderColor: colors.secondary}} >
                                        <Text style={{color: 'black', fontFamily: 'ZermattFirst', fontSize:22, padding: 5}}>Medium</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft: "8.8%",alignItems: 'center', width: "28%", backgroundColor: 'whtie', borderWidth: 4, borderColor: colors.secondary}} >
                                        <Text style={{color: 'black', fontFamily: 'ZermattFirst', fontSize:22, padding: 5}}>Hard</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* details */}
                        <View style={{ left: '5%', marginTop: "10%", width:"97%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View style={{flexDirection: 'row', marginTop: "5%"}} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 21, fontFamily: 'AvianoFlareRegular'}} >Prep Time</Text>
                                    <Text style={{maxWidth: "70%", minWidth: "70%", color: colors.primary,fontFamily: 'sofiaprolight'}} >How much time do you actively spend making the dish?</Text>
                                </View>
                                <View style={{top: -10, width: "33%", borderBottomColor: "black", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'flex-end'}} >
                                    <TextInput  placeholderTextColor={colors.primary} placeholder="0 min" style={{fontSize:20, width: "50%"}} />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: "5%"}} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 21, fontFamily: 'AvianoFlareRegular'}} >Baking Time</Text>
                                    <Text style={{maxWidth: "70%", minWidth: "70%", color: colors.primary,fontFamily: 'sofiaprolight'}} >How much time does the dish need to bake for?</Text>
                                </View>
                                <View style={{top: -10, width: "33%", borderBottomColor: "black", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'flex-end'}} >
                                    <TextInput  placeholderTextColor={colors.primary} placeholder="0 min" style={{fontSize:20, width: "50%"}} />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: "5%"}} >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontSize: 21, fontFamily: 'AvianoFlareRegular'}} >Resting Time</Text>
                                    <Text style={{maxWidth: "70%", minWidth: "70%", color: colors.primary,fontFamily: 'sofiaprolight'}} >Does the dish need to rest any point? e.g maintaining, chilling  , rising time</Text>
                                </View>
                                <View style={{top: -10, width: "33%", borderBottomColor: "black", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'flex-end'}} >
                                    <TextInput  placeholderTextColor={colors.primary} placeholder="0 min" style={{fontSize:20, width: "50%"}} />
                                </View>
                            </View>
                        </View>

                        {/* Next Button */}
                        <View style={{width:'100%', left: "5%", marginBottom: 20}} >
                            <TouchableOpacity style={{backgroundColor: colors.primary, alignItems: 'center', marginTop:"13%"}} >
                                <Text style={{fontFamily: 'AvianoFlareRegular', padding:11, fontSize: 17, color: 'white'}} >Next</Text>
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
        width:'100%',
        // justifyContent: 'center',

        // marginHorizontal: 20,
        // backgroundColor: 'pink',
    },
    recipeContainer: {
        // backgroundColor: 'pink',
        width:'90%',
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom:30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default CreateRecipe;