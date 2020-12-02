import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { Constants } from 'expo';
import { SliderBox } from "react-native-image-slider-box";

const { width } = Dimensions.get('window');
const height = width * 0.8

import img from "../assets/images/Rectangle6.png"

class HomeSlider extends Component {
  state = {
    images: [
      img, img, img, img, img         // Local image
    ]
  };
  render() {
      return (
        <View
          style={styles.container}
        >
          <SliderBox images={this.state.images} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  
});

export default HomeSlider;