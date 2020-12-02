import React, { Component, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { Constants } from 'expo';
import { SliderBox } from "react-native-image-slider-box";

import { useFonts } from 'expo-font'
const { width } = Dimensions.get('window');
const height = width * 0.8

import img from "../assets/images/Rectangle6.png"
import colors from '../config/colors';

export default function HomeSlider() {
    const [images, setImages] = useState([
      img, img, img, img, img         // Local image
    ])

    let [fontsLoaded] = useFonts({
      'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
    });

    
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.sliderHeading} >
            Recommended for you today
        </Text>
        <SliderBox 
          images={images}
          dotColor={colors.primary}
          resizeMode={'cover'}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    
  },
  sliderHeading: {
    fontFamily: 'ZermattFirst',
    fontSize: 18,
    // fontsStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.02,
    textAlign: 'left',

  }
  
});