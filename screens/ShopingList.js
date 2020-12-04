import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import Constants from 'expo-constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import feedImg1 from "../assets/images/Rectangle8.png"
import feedImg2 from "../assets/images/Rectangle9.png"
import feedImg3 from "../assets/images/Rectangle18.png"
import feedImg4 from "../assets/images/Rectangle19.png"
import ShopingListCard from '../components/ShopingListCard';

const screenWidth = Dimensions.get('window').width;


const shopingData = [
    {   
        id: 1,
        picture: feedImg3,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 2,
        picture: feedImg3,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 3,
        picture: feedImg1,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 4,
        picture: feedImg3,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 5,
        picture: feedImg2,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 6,
        picture: feedImg4,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 7,
        picture: feedImg4,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
    {   
        id: 8,
        picture: feedImg4,
        heading: 'Frech Toast With Omlette',
        subHeading: '5 Ingrdients',
    },  
]

function ShopingList({navigation}) {
    return (
        <SafeAreaView  style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.shopingContainer}>
                    <Text style={{fontFamily: 'ZermattFirst', fontSize:RFPercentage(3.5)}} >Shopping List</Text>
                    <ScrollView style={{flexDirection:'row', marginLeft: -5, marginTop: 20}} >
                        <FlatList
                            data={shopingData}
                            keyExtractor={item => item.id.toString()}     //has to be unique   
                            renderItem={({item, index}) => <ShopingListCard navigation={navigation} screenWidth={screenWidth} id={index} heading={item.heading} subHeading={item.subHeading} picture={item.picture} />} //method to render the data in the way you want using styling u need
                            horizontal={false}
                            numColumns={1}
                        />
                    </ScrollView>
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

export default ShopingList;