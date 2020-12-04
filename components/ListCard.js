import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors';

function ListCard({screenWidth, picture, heading, subHeadding, hashTags, time, serve}) {
   return (
       <View style={{width: screenWidth-20, height: screenWidth/3-15, flexDirection: 'row', marginTop: 20, borderWidth: 0.3, borderColor: colors.primary}} >
            <View>
                <Image source={picture} style={{width: screenWidth/3-15, height: screenWidth/3-15}} />
            </View>
            <View style={{flexDirection: 'column', left: 15, marginTop: RFPercentage(1.7)}}>
                <Text style={{lineHeight:RFPercentage(2.8), fontFamily: 'AvianoFlareRegular', fontSize:RFPercentage(1.6), maxWidth: 250}} >{heading}</Text>
                <Text style={{fontFamily: 'sofiaprolight', fontSize:RFPercentage(1.6), color: colors.primary, marginTop:5}} >{hashTags}</Text>
                
                <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'flex-end', right: 15}}>
                    <View style={{flexDirection: 'row', right: 15}}>
                        <MaterialCommunityIcons style={{opacity:0.6}} name='history' color={colors.primary} size={15} />
                        <Text style={{fontSize:10, color: colors.primary, margin: 3, opacity:0.6}} >{time}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons style={{opacity:0.6}} name='apple' color={colors.primary} size={15} />
                        <Text style={{fontSize:10, color: colors.primary, margin: 3, opacity:0.6}} >{serve}</Text>
                    </View>
                </View>
            </View>
        </View>
   );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default ListCard;