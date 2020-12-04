import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, ColorPropType, Platform } from 'react-native';
import { useFonts } from 'expo-font'
import colors from '../config/colors';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get('window').width;

function FeedCard({hashTags, likes, picture, heading, subHeading, id, lastChild}) {
    
    
    console.log("hi", (screenWidth/2) - 10, RFPercentage(23.7))
    return (            
            <View key={id} style={{marginTop: (id%2===0) ? 0 : RFPercentage(26.8), marginBottom: (id%2===0) ? 0 : (lastChild===(id+1) ? 0 : -RFPercentage(26.8)), flexDirection:'row', marginLeft: 5, marginRight:5}} >
                <View style={styles.feedCards} >
                    {/* <View> */}
                        <ImageBackground source={picture} style={[styles.backgroundRecipt]} >
                           
                            <View style={[styles.feedLikes]} >
                                <Text style={{fontFamily: 'sofiaprolight', color: colors.primary, minWidth: RFPercentage(24.4)}}>{hashTags}</Text>
                                <Text style={{color: 'white', fontFamily: 'sofiaprolight', maxWidth: RFPercentage(26.8)}} >
                                    {heading}
                                </Text>
                                <View style={{flexDirection: 'row'}} >
                                    <Text style={{color: 'white',fontFamily: 'sofiaprolight', maxWidth: RFPercentage(26.8)}} >
                                        {subHeading}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.reciptTime} >
                                <MaterialCommunityIcons name='heart' size={15} color={colors.primary} />
                                <Text style={{fontSize:RFPercentage(1.7), fontFamily: 'Roboto', color: colors.primary}}>{likes}</Text>
                            </View>

                        </ImageBackground>
                    </View>
                {/* </View> */}
                
            </View>
   );
}

const styles = StyleSheet.create({
   feedTitle: {
        fontSize: RFPercentage(3.7),
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
        width: Platform.OS==='ios' ?  RFPercentage(26.7) : RFPercentage(23.7), height: (screenWidth) - 90, paddingLeft: Platform.OS==='ios' ?  RFPercentage(8.7) : 110,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    feedLikes: {
        flexDirection: 'column',
        position: 'absolute',
        bottom:RFPercentage(3.8),
        left:RFPercentage(1)
    },
    reciptTime: {
        flexDirection: 'row',
        position: 'absolute',
        minWidth: RFPercentage(9),
        bottom:RFPercentage(0.8),
        right:-RFPercentage(0.8),
    },
  
})

export default FeedCard;