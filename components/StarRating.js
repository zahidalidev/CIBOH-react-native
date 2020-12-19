import React, { Component } from 'react';
//import react in our code. 
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
//import all the components we are going to use.

export default class StarRating extends Component {
    constructor() {
        super();
        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }

    UpdateRating(key) {
        // update rating
        this.props.onHandleRating(key)
    }

    render() {
        let starRatingBar = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.props.maxRating; i++) {
            starRatingBar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.UpdateRating.bind(this, i)}>
                    <Image
                        style={styles.StarImage}
                        source={
                            i <= this.props.onCurrentRating
                                ? { uri: this.Star }
                                : { uri: this.Star_With_Border }
                        }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.childView}>{starRatingBar}</View>
        );
    }
}

const styles = StyleSheet.create({
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: RFPercentage(3),
    },

    StarImage: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        resizeMode: 'cover',
    },

});