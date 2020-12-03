import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useCallback} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, FlatList } from 'react-native';
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"
import { ImageBackground, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Story from '../components/Story';
import HomeSlider from '../components/HomeSlider';
import colors from '../config/colors';
import featureImg from "../assets/images/Ellipse5.png"
import feedImg1 from "../assets/images/Rectangle8.png"
import feedImg2 from "../assets/images/Rectangle9.png"
import Card from '../components/Card';


const screenWidth = Dimensions.get('window').width;
const { width } = Dimensions.get('window');
const height = width * 0.45
const SCREEN_WIDTH = Dimensions.get('window').width;
const CAROUSEL_VERTICAL_OUTPUT = 30;
const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

const feed = [
    {
        id: 1,
        heading: "Michelle",
        likes: 10,
        picture: feedImg1
    },
    {
        id: 2,
        heading: "Michelle",
        likes: 10,
        picture: feedImg2
    },
]

    
const images = [
    {picture: feed[0].picture},        // Local image
    {picture: feed[0].picture},        // Local image
    {picture: feed[0].picture},        // Local image
    {picture: feed[0].picture},        // Local image
    {picture: feed[0].picture},        // Local image
]


export default function Home() {

    let [fontsLoaded] = useFonts({
        'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
        'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
        'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
        });

    const [activeSlide, setActiveSlide] = useState(0); // current active slide card
    
    
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;

    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
        }
    }, []);


    if(!fontsLoaded) {
        return null 
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <Story />
            <ScrollView style={styles.scrollView}>
                <View style={styles.belowStoryContainer} >

                    {/* Recomended */}
                    <HomeSlider />

                    {/* Featured Stories */}
                    <View style={styles.featuredContainer}>
                        <Text style={[styles.featureTitle, {fontFamily: 'ZermattFirst',}]} >
                            Featured Stories
                        </Text>
                        <View  style={styles.featuredStories}>
                            <Text style={[styles.featureHeading, {fontFamily: 'AvianoFlareRegular'}]} >
                                How to make {"\n\n"}
                                home made ice-cream
                            </Text>
                            <Image style={styles.featureImg} source={featureImg} />
                            <View style={styles.subHeading} >
                                <Text style={{fontFamily: 'sofiaprolight', color: colors.primary}} >
                                    Lisa-Krisin Erdt
                                </Text>
                                <View style={styles.likes} >
                                    <MaterialCommunityIcons name="heart" color={colors.primary} size={20} />
                                    <Text style={{ color: colors.primary, left: 7}} >275</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* latest Feed */}

                    <View style={styles.feedContainer}>
                        <View style={{flexDirection: 'row'}} >
                            <Text style={[styles.feedTitle, {fontFamily: 'ZermattFirst',}]} >
                                Latest Feed
                            </Text>
                            <Text style={{color: colors.primary, position:'absolute', right: "11%"}} >
                                See All
                            </Text>
                        </View>
                        
                        <View style={{flexDirection:'row'}} >
                            <View style={styles.feedCards} >
                                <View style={{flexDirection: 'row', marginTop:15, marginBottom:-15}}>
                                    <MaterialIcons name="account-circle" color={colors.primary} size={15} />
                                    <Text style={{fontFamily: 'ZermattFirst'}} >Michelle</Text>
                                </View>
                                <View>
                                    <ImageBackground source={feed[0].picture} style={styles.background} >
                                        <View style={styles.feedLikes} >
                                            <MaterialCommunityIcons name='heart' size={15} color="white" />
                                            <Text style={{fontFamily: 'Roboto', color: 'white'}}>100k</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, marginTop:5, maxWidth: 170}} >
                                    Tasty Strawberry icecream 
                                </Text>
                            </View>
                            <View style={styles.feedCards2} >
                                <View style={{flexDirection: 'row', marginTop:15, marginBottom:-15}}>
                                    <MaterialIcons name="account-circle" color={colors.primary} size={15} />
                                    <Text style={{fontFamily: 'ZermattFirst'}} >Michelle</Text>
                                </View>
                                <View>
                                    <ImageBackground source={feed[1].picture} style={styles.background} >
                                        <View style={styles.feedLikes} >
                                            <MaterialCommunityIcons name='heart' size={15} color="white" />
                                            <Text style={{fontFamily: 'Roboto', color: 'white'}}>100k</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                 <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, marginTop:5, maxWidth: 170}} >
                                    Fruit Salad
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Latest Recipe */}
                    <View style={styles.feedContainer}>
                        <View style={{flexDirection: 'row'}} >
                            <Text style={[styles.feedTitle, {fontFamily: 'ZermattFirst',}]} >
                                Latest Recipe
                            </Text>
                            <Text style={{color: colors.primary, position:'absolute', right: "11%"}} >
                                See All
                            </Text>
                        </View>

                        {/* courasel */}
                        <View style={styles.screen}>
                            <View style={{marginBottom: -15, marginLeft: -5, paddingRight:30}}>
                                <FlatList style={styles.flatList} 
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true} 
                                    data={images}
                                    keyExtractor={item => item.id}
                                    renderItem={() => <Card picture={feed[0].picture} />}
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={onScroll}
                                >
                                </FlatList>


                            </View>
                            <View style={styles.dotsPgae} >
                                <Pagination
                                dotsLength={parseInt(images.length/2)}
                                activeDotIndex={index}
                                inactiveDotStyle={{width: 12, height: 12, borderRadius: 50}}
                                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                                dotStyle={{backgroundColor: 'grey', margin: -5}}
                                />
                            </View>
                        </View>
                    </View>





                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 30,
    flexDirection: 'column'
  },
  scrollView: {
    // flex: 15,
    // justifyContent: 'center',
    // backgroundColor: 'pink',
    marginHorizontal: 20,
    },
    belowStoryContainer: {
        marginTop: 30
    },

    featuredContainer: {
        marginTop: 15
    },
    
    featuredStories: {
        flex: 1,
        backgroundColor: colors.secondary,
        flexDirection: 'row',
    },
    featureHeading: {
        // fontWeight: '900',
        padding: 25,
        fontSize: 13,
    },
    
    featureImg: {
        left: 17,
        alignSelf: 'flex-end', 
        top: -35
    },
    featureTitle: {
        fontSize: 27,
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: -0.5,
        textAlign: 'left',
        marginBottom: 10
    },
    subHeading: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 23,
        alignItems: 'center',
        left: 25
    },
    likes: {
        flexDirection: 'row',
        left: 60,
    },


    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 25,
        // justifyContent: 'center',
        // alignItems: 'flex-start'
    },
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
    feedCards2: {
        flexDirection: 'column',
        left: 10
    },

    background: {
        width:(screenWidth/2) - 30, height: 110, paddingLeft: 110,
        paddingHorizontal: 15,
        marginTop: 20
    },

    feedLikes: {
        flexDirection: 'row',
        position: 'absolute',
        bottom:5,
        left:5
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
});
