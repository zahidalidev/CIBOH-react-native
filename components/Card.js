import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, ColorPropType } from 'react-native';
import { useFonts } from 'expo-font'
import colors from '../config/colors';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"


const screenWidth = Dimensions.get('window').width;

function Card({heading, likes, picture}) {

    let [fontsLoaded] = useFonts({
        'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
        'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
        'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
        });
    
    if(!fontsLoaded) {
        return null 
        }

    return (
      
                        
            <View style={{flexDirection:'row', marginLeft: 5, marginRight:5}} >
                <View style={styles.feedCards} >
                    <View>
                        <ImageBackground source={picture} style={styles.backgroundRecipt} >
                            <View style={styles.feedLikes} >
                                <MaterialCommunityIcons name='heart' size={15} color="white" />
                                <Text style={{fontFamily: 'Roboto', color: 'white'}}>100k</Text>
                            </View>
                            <View style={styles.reciptTime} >
                                <Text style={{fontFamily: 'Roboto', color: 'white'}}>40mins</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, marginTop:5, maxWidth: 170}} >
                        Tasty Strawberry icecream 
                    </Text>
                    <View style={{flexDirection: 'row'}} >
                    <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, maxWidth: 170}} >
                        by 
                    </Text>
                    <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, maxWidth: 170, color: colors.primary}} >
                        {' '} Christy Obioha
                    </Text>

                    </View>
                </View>
                
            </View>
   );
}

const styles = StyleSheet.create({
   feedTitle: {
        fontSize: 27,
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: -0.5,
        textAlign: 'left',
        marginBottom: 10
    },
    feedCards: {
        flexDirection: 'column',
    },
    backgroundRecipt: {
        width:(screenWidth/2) - 50, height: 110, paddingLeft: 110,
        paddingHorizontal: 15,
        marginTop: 20
    },
    feedLikes: {
        flexDirection: 'row',
        position: 'absolute',
        bottom:5,
        left:5
    },
    reciptTime: {
        flexDirection: 'row',
        position: 'absolute',
        minWidth: 50,
        bottom:5,
        right:-3,
    },
})

export default Card;