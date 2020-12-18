import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';

import rectangleDetail1 from "../assets/images/rectangleDetail1.png"
import rectangleDetail2 from "../assets/images/rectangleDetail2.png"
import rectangleDetail3 from "../assets/images/rectangleDetail3.png"
import rectangleDetail4 from "../assets/images/rectangleDetail4.png"
import rectangleDetail5 from "../assets/images/rectangleDetail5.png"
import { Text } from 'react-native';
import StarRating from '../components/StarRating';

function Detail(props) {

    const [currentRating, setCurrentRating] = useState(2)

    const handleRating = (rating) => {
        setCurrentRating(rating)
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar style="auto" backgroundColor="white" /> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <ImageBackground resizeMode="stretch" style={{ alignItems: 'center', justifyContent: 'flex-end', width: "100%", height: RFPercentage(27) }} source={rectangleDetail1} >
                    <View style={styles.topImageShade} ></View>
                    <View style={{ width: "90%", marginBottom: RFPercentage(2) }} >
                        <Text style={{ fontSize: RFPercentage(2.6), color: 'white', fontFamily: 'AvianoFlareRegular' }} >Make yummilicious breakfast for yourself</Text>
                    </View>
                </ImageBackground>

                {/* custom component */}
                <StarRating onHandleRating={handleRating} onCurrentRating={currentRating} maxRating={5} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        width: '100%'
    },
    scrollView: {
        // backgroundColor: 'red',
        flex: 1,

        width: '100%',
    },
    topImageShade: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})

export default Detail;