import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, ColorPropType } from 'react-native';
import { useFonts } from 'expo-font'
import colors from '../config/colors';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get('window').width;

function Card({time, likes, picture, description, author}) {

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
                                <Text style={{fontSize: RFPercentage(1.2),fontFamily: 'Roboto', color: 'white'}}>{likes}</Text>
                            </View>
                            <View style={styles.reciptTime} >
                                <Text style={{fontSize: RFPercentage(1.2),fontFamily: 'Roboto', color: 'white'}}>{time}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:RFPercentage(1.1), marginTop:5, maxWidth: RFPercentage(23)}} >
                        {description}
                    </Text>
                    <View style={{flexDirection: 'row'}} >
                    <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:RFPercentage(1.1), maxWidth: RFPercentage(23)}} >
                        by 
                    </Text>
                    <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:RFPercentage(1.1), maxWidth: RFPercentage(23), color: colors.primary}} >
                        {' '} {author}
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
        width:RFPercentage(19), height: RFPercentage(13), paddingLeft: RFPercentage(13),
        paddingHorizontal: 15,
        marginTop: 20
    },
    feedLikes: {
        flexDirection: 'row',
        position: 'absolute',
        bottom:RFPercentage(0.1),
        left:RFPercentage(0.6)
    },
    reciptTime: {
        flexDirection: 'row',
        position: 'absolute',
        minWidth: RFPercentage(6),
        bottom:RFPercentage(0.8),
        right:-3,
    },
})

export default Card;