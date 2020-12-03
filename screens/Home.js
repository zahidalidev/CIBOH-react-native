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
import Card from '../components/Card';


import featureImg from "../assets/images/Ellipse5.png"
import feedImg1 from "../assets/images/Rectangle8.png"
import feedImg2 from "../assets/images/Rectangle9.png"
import feedImg3 from "../assets/images/Rectangle18.png"
import feedImg4 from "../assets/images/Rectangle19.png"
import feedImg5 from "../assets/images/Rectangle20.png"


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
        likes: '10k',
        picture: feedImg1,
        description: 'Tasty Strawberry icecream'
    },
    {
        id: 2,
        heading: "Michelle",
        likes: '10k',
        picture: feedImg2,
        description: 'Fruit Salad'
    },
]

    
const recipeData = [
    {   
        id: 1,
        picture: feedImg3,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 2,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 3,
        picture: feedImg1,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 4,
        picture: feedImg3,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 5,
        picture: feedImg2,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 6,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 7,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
    {   
        id: 8,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },  
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
        <SafeAreaView  style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            
            {/* Stories */}
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
                                    <Text style={{fontFamily: 'ZermattFirst'}} >{feed[0].heading}</Text>
                                </View>
                                <View>
                                    <ImageBackground source={feed[0].picture} style={styles.background} >
                                        <View style={styles.feedLikes} >
                                            <MaterialCommunityIcons name='heart' size={15} color="white" />
                                            <Text style={{fontFamily: 'Roboto', color: 'white'}}>{feed[0].likes}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, marginTop:5, maxWidth: 170}} >
                                    {feed[0].description}
                                </Text>
                            </View>
                            <View style={styles.feedCards2} >
                                <View style={{flexDirection: 'row', marginTop:15, marginBottom:-15}}>
                                    <MaterialIcons name="account-circle" color={colors.primary} size={15} />
                                    <Text style={{fontFamily: 'ZermattFirst'}} >{feed[1].heading}</Text>
                                </View>
                                <View>
                                    <ImageBackground source={feed[1].picture} style={styles.background} >
                                        <View style={styles.feedLikes} >
                                            <MaterialCommunityIcons name='heart' size={15} color="white" />
                                            <Text style={{fontFamily: 'Roboto', color: 'white'}}>{feed[1].likes}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                 <Text style={{fontFamily: 'AvianoFlareRegular', fontSize:9, marginTop:5, maxWidth: 170}} >
                                    {feed[1].description}
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
                                    data={recipeData}
                                    keyExtractor={item => item.id}
                                    renderItem={({item, index}) => <Card author={item.author} description={item.description} time={item.time} likes={item.likes} picture={item.picture} />}
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={onScroll}
                                >
                                </FlatList>
                            </View>
                            <View style={styles.dotsPgae} >
                                <Pagination
                                dotsLength={parseInt(recipeData.length/2.5)}
                                activeDotIndex={index}
                                inactiveDotStyle={{width: 12, height: 12, borderRadius: 50}}
                                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                                dotStyle={{backgroundColor: 'grey', margin: -5}}
                                />
                            </View>
                        </View>
                    </View>


                    {/* Lets Talk */}

                    <View style={styles.talkContainer}>
                        <View style={{flexDirection: 'row'}} >
                            <Text style={[styles.talkTitle, {fontFamily: 'ZermattFirst',}]} >
                                Lets Talk
                            </Text>
                        </View>
                        
                        <View style={styles.feedCards3} >
                            <View>
                                <Image source={feedImg5} style={styles.talkBackground} />
                            </View>
                            <View style={{flexDirection: 'column', left: 15, marginTop: 20}}>
                                <Text style={{fontFamily: 'ZermattFirst', fontSize:18}} >Lorem ipsum dolor sit amet</Text>
                                
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <MaterialCommunityIcons style={{opacity:0.6}} name='check-circle-outline' color={colors.primary} size={20} />
                                    <Text style={{color: colors.primary, margin: 3, opacity:0.6}} >Yes</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <MaterialCommunityIcons style={{opacity:0.4}} name='checkbox-blank-circle-outline' color={'grey'} size={20} />
                                    <Text style={{color: 'grey', margin: 3, opacity:0.4}} >No</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <MaterialCommunityIcons style={{opacity:0.4}} name='checkbox-blank-circle-outline' color={'grey'} size={20} />
                                    <Text style={{color: 'grey', margin: 3, opacity:0.4}} >Maybe</Text>
                                </View>
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
        lineHeight: 27,
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
    talkContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: -10,
        marginBottom:30
        // justifyContent: 'center',
        // alignItems: 'flex-start'
    },
    feedTitle: {
        fontSize: 27,
        fontWeight: '600',
        lineHeight: 27,
        letterSpacing: -0.5,
        textAlign: 'left',
        marginBottom: 10
    },
    talkTitle: {
        fontSize: 27,
        fontWeight: '600',
        lineHeight: 27,
        letterSpacing: -0.5,
        textAlign: 'left',
        marginBottom: 1
    },
    feedCards: {
        flexDirection: 'column',
    },
    feedCards3: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 20

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
    talkBackground: {
        width:(screenWidth/2) - 80, height: 140, paddingLeft: 110,
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
