import React, { Component, useState } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet, Dimensions, Text, Platform } from 'react-native';
import { Constants } from 'expo';
import { SliderBox } from "react-native-image-slider-box";
import { useFonts } from 'expo-font'

import Carousel, { Pagination } from 'react-native-snap-carousel';

import img from "../assets/images/Rectangle6.png"
import colors from '../config/colors';

const { width } = Dimensions.get('window');
const height = width * 0.45
const SCREEN_WIDTH = Dimensions.get('window').width;
const CAROUSEL_VERTICAL_OUTPUT = 30;
const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function HomeSlider() {
    const [images, setImages] = useState([
      {picture: img},        // Local image
      {picture: img},        // Local image
      {picture: img},        // Local image
      {picture: img},        // Local image
      {picture: img},        // Local image
    ])

    let [fontsLoaded] = useFonts({
      'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
      'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
      'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
    });


    
    const [activeSlide, setActiveSlide] = useState(0); // current active slide card

    // Carousel Component to render 
    const renderItem = ({item, index}) => {
      return (
          <View >
              <ImageBackground
                source={item.picture}
                style={{width: SCREEN_WIDTH, height: height, flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center", backgroundColor: 'red' }}
              >
                <View style={styles.sliderImg}>
                </View>
                <View style={styles.likes} >
                  <MaterialCommunityIcons name='heart' size={15} color="white" />
                  <Text style={[styles.subheadingTwo, {fontFamily: 'Roboto'}]}>100k</Text>
                </View>

                <View style={styles.imgContent} >
                  <Text style={[styles.headingOne, {fontFamily: 'AvianoFlareRegular',}]}>Chocolate mug cake</Text>
                  <Text style={[styles.headingTwo, {fontFamily: 'sofiaprolight',}]}>by Oluchi Nwoke</Text>
                </View>
                <View style={styles.imgSub} >
                  <MaterialCommunityIcons name='history' size={15} color="white" />
                  <Text style={[styles.subheadingOne, {fontFamily: 'Roboto',}]}>7 min</Text>
                  <MaterialCommunityIcons name='apple' size={15} color="white" />
                  <Text style={[styles.subheadingTwo, {fontFamily: 'Roboto',}]}>1 serve</Text>
                </View>
                  
              </ImageBackground>
          </View>
      );
    }

    if(!fontsLoaded) {
      return null 
    }

    return (
      <View style={styles.screen}>
          <Text style={[styles.sliderHeading, {fontFamily: 'ZermattFirst',}]} >
              Recommended for you today
          </Text>
          <View style={{marginBottom: -15}}>
            <Carousel
              data={images}
              renderItem={renderItem}
              onSnapToItem={(index) => setActiveSlide(index)} // we will update active slide index
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              layout={'default'}
            />
          </View>
          <View style={styles.dotsPgae} >
            <Pagination
              dotsLength={images.length}
              activeDotIndex={activeSlide}
              inactiveDotStyle={{width: 12, height: 12, borderRadius: 50}}
              containerStyle={{alignItems: 'center', justifyContent: 'center'}}
              dotStyle={{backgroundColor: 'grey', margin: -5}}
            />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    
  },
  sliderHeading: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0.02,
    textAlign: 'left',
    marginBottom: 10
  },
  screen: {
    // backgroundColor: "red",
    // width: SCREEN_WIDTH
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  dotsPgae: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: -5,
    marginRight: '5%'
  },
  sliderImg: {
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  imgContent: {
    left: 14,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  imgSub: {
    left: 14,
    flexDirection: 'row',
  },
  likes: {
    flex: 1,
    right: 40,
    top: 160,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  headingOne: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.02,
    textAlign: 'left',
    marginBottom: 10,
  },
  headingTwo: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.02,
    textAlign: 'left',
    marginBottom: 10,
  },
  subheadingOne: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.02,
    textAlign: 'left',
    marginBottom: 10,
    marginHorizontal: 5
  },
  subheadingTwo: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.02,
    textAlign: 'left',
    marginBottom: 10,
    marginHorizontal: 5
  }
  
});