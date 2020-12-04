import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors';

function ShopingList_1Card({id, screenWidth, picture, heading, quantity, onHandleIncrement, onHandleDecrement}) {
   return (
       <View key={id} style={{width: screenWidth-16, height: screenWidth/3-15, flexDirection: 'row', marginTop: 20, borderWidth: 0.3, borderColor: colors.primary}} >
            <View>
                <Image resizeMode='stretch' source={picture} style={{width: screenWidth/3-15, height: screenWidth/3-15}} />
            </View>
            <View style={{flexDirection: 'column', left: RFPercentage(1.8), marginTop: 30}}>
                <Text style={{lineHeight:25, fontFamily: 'AvianoFlareRegular', fontSize:RFPercentage(1.7), maxWidth: 210, minWidth:210, maxHeight:80}} >{heading}</Text>
                
                <View style={{flexDirection: 'row', alignItems: 'center', right: RFPercentage(0.1), top: "18%", position: 'absolute'}}>
                    <MaterialCommunityIcons onPress={() => onHandleDecrement(id)} style={{opacity:0.8, right:17}} name='minus' color={colors.primary} size={20} />
                    <Text style={{fontSize:RFPercentage(2), fontWeight: 'bold',opacity:0.7}} >{quantity}</Text>
                    <MaterialCommunityIcons onPress={() => onHandleIncrement(id)} style={{opacity:0.8, left: 17}} name='plus' color={colors.primary} size={20} />
                </View>
            </View>
        </View>
   );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default ShopingList_1Card;