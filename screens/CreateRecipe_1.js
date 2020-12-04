import React, {useState} from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'

import colors from '../config/colors';

function CreateRecipe_1(props) {

  


    return (
       <SafeAreaView  style={styles.container}>
                <StatusBar style="auto" backgroundColor="white" />
                <ScrollView style={styles.scrollView}>
                    {/* header */}
                    <View style={{backgroundColor: colors.secondary, width:"100%"}}>
                        <Text style={{padding: 10, left: "2%", color: "white", maxWidth: "90%",fontFamily: "ZermattFirst", fontSize:30}} >Something’s Cooking Lets add a few more details</Text>
                    </View>

                    <View style={styles.recipeContainer}>

                        
                        {/* feild */}
                        <View style={{ left: '5%', marginTop: "10%", width:"100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Serving For</Text>
                                <TextInput style={{marginTop: 5, fontSize:20 ,minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1}} />
                            </View>
                        </View>

                        {/* Add ingredients */}
                        <View style={{ left: '5%', marginTop: "10%", width:"100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Ingredients</Text>
                            <View style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius:2, marginTop: 20, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)'}} >
                                <Text style={{opacity: 1, padding: 20, fontFamily: 'ZermattFirst', fontSize:23, color: colors.primary}}>Add Ingredients</Text>
                            </View>
                        </View>

                        {/* Steps */}
                        <View style={{ left: '5%', marginTop: "10%", width:"100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Steps</Text>
                            <View style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius:2, marginTop: 20, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)'}} >
                                <Text style={{opacity: 1, padding: 20, fontFamily: 'ZermattFirst', fontSize:23, color: colors.primary}}>Add Steps</Text>
                            </View>
                        </View>

                       
                        {/* Next Button */}
                        <View style={{width:'100%',height: '100%', left: "5%", marginTop: "40%"}} >
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

export default CreateRecipe_1;