import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';

function ShopingListCard({screenWidth, picture, heading, subHeading}) {
   return (
       <View style={{width: screenWidth-16, height: screenWidth/3-15, flexDirection: 'row', marginTop: 20, borderWidth: 0.3, borderColor: colors.primary}} >
            <View>
                <Image resizeMode='stretch' source={picture} style={{width: screenWidth/3-15, height: screenWidth/3-15}} />
            </View>
            <View style={{flexDirection: 'column', left: 15, marginTop: 30}}>
                <Text style={{lineHeight:25, fontFamily: 'AvianoFlareRegular', fontSize:13, maxWidth: 250}} >{heading}</Text>
                <Text style={{fontFamily: 'sofiaprolight', fontSize:14, color: colors.primary, marginTop:20}} >{subHeading}</Text>
                
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', right: "-23%", top: "18%", position: 'absolute'}}>
                    <MaterialCommunityIcons style={{opacity:0.8}} name='chevron-right' color={colors.primary} size={35} />
                </TouchableOpacity>
            </View>
        </View>
   );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default ShopingListCard;