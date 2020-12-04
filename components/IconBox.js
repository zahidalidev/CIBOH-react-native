import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width;

function IconBox({picture, title}) {
   return (
       <View style={styles.container}>
           <Image source={picture} />
           <Text style={{fontFamily: 'ZermattFirst', fontSize:RFPercentage(2.6), marginTop:10}} >Drinks</Text>
       </View>
   );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2.5,
        borderColor: colors.primary,
        width:(screenWidth/3)-25,
        height: (screenWidth/3)-25,
        marginHorizontal: 12
    }
})

export default IconBox;