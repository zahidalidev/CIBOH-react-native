import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, ColorPropType } from 'react-native';
import { useFonts } from 'expo-font'
import colors from '../config/colors';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"


const screenWidth = Dimensions.get('window').width;

function FeedCard({hashTags, likes, picture, heading, subHeading, id, lastChild}) {

    let [fontsLoaded] = useFonts({
        'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
        'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
        'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
        });
    
    if(!fontsLoaded) {
        return null 
        }

        console.log(id)
    return (            
            <View key={id} style={{marginTop: (id%2===0) ? 0 : 200, marginBottom: (id%2===0) ? 0 : (lastChild===(id+1) ? 0 : -200), flexDirection:'row', marginLeft: 5, marginRight:5}} >
                <View style={styles.feedCards} >
                    {/* <View> */}
                        <ImageBackground source={picture} style={[styles.backgroundRecipt]} >
                           
                            <View style={[styles.feedLikes]} >

                                <Text style={{fontFamily: 'sofiaprolight', color: colors.primary, minWidth: 200}}>{hashTags}</Text>
                                <Text style={{color: 'white', fontFamily: 'sofiaprolight', maxWidth: 170}} >
                                    {heading}
                                </Text>
                                <View style={{flexDirection: 'row'}} >
                                    <Text style={{color: 'white',fontFamily: 'sofiaprolight', maxWidth: 170}} >
                                        {subHeading}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.reciptTime} >
                                <MaterialCommunityIcons name='heart' size={15} color={colors.primary} />
                                <Text style={{fontFamily: 'Roboto', color: colors.primary}}>{likes}</Text>
                            </View>

                        </ImageBackground>
                    </View>
                {/* </View> */}
                
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
        width:(screenWidth/2) - 10, height: (screenWidth) - 90, paddingLeft: 110,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    feedLikes: {
        flexDirection: 'column',
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

export default FeedCard;