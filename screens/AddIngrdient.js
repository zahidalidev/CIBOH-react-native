import React, {useState} from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'

import colors from '../config/colors';

function AddIngrdient({navigation}) {

    return (
       <SafeAreaView  style={styles.container}>
                <StatusBar style="auto" backgroundColor="white" />
                <ScrollView style={styles.scrollView}>
                    {/* header */}
                    <View style={{backgroundColor: colors.secondary, width:"100%"}}>
                        <Text style={{padding: 10, left: "2%", color: "white", maxWidth: "90%",fontFamily: "ZermattFirst", fontSize:30}} >Add some Ingredients to the tasteful dish</Text>
                    </View>

                    <View style={styles.recipeContainer}>

                        
                        {/* feilds */}
                        <View style={{ left: '5%', marginTop: "10%", width:"95%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Ingrdient</Text>
                                <TextInput style={{marginTop: 5, fontSize:20 ,minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1}} />
                            </View>
                        </View>

                        <View style={{ left: '3%', marginTop: "10%", width:"100%", flexDirection: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Amount</Text>
                                <TextInput style={{marginTop: 5, fontSize:20 ,minWidth: "40%", borderBottomColor: "black", borderBottomWidth: 1}} />
                            </View>
                            <View style={{marginLeft: "12%"}} >
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Unit</Text>
                                <TextInput style={{marginTop: 5, fontSize:20 ,minWidth: "45%", borderBottomColor: "black", borderBottomWidth: 1}} />
                            </View>
                        </View>

                        <View style={{ left: '5%', marginTop: "10%", width:"95%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} >
                            <View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize: 22}} >Special Use</Text>
                                <TextInput style={{marginTop: 5, fontSize:20 ,minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1}} />
                            </View>
                        </View>

                        
                       
                        {/* Next Button */}
                        <View style={{width:'100%',height: '100%', left: "5%", marginTop: "65%"}} >
                            <TouchableOpacity onPress={() => navigation.navigate('AddStep')} style={{backgroundColor: colors.primary, alignItems: 'center', marginTop:"13%"}} >
                                <Text style={{fontFamily: 'AvianoFlareRegular', padding:11, fontSize: 17, color: 'white'}} >Save</Text>
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
        paddingTop: Constants.statusBarHeight,
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

export default AddIngrdient;