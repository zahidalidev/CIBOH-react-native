import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';
import img from '../assets/images/Rectangle2991.png'
import img2 from '../assets/images/Rectangle99.png'
import FeedCard from '../components/FeedCard';
import ListCard from '../components/ListCard';

const screenWidth = Dimensions.get('window').width;
const { width } = Dimensions.get('window');
const height = width * 0.45
const SCREEN_WIDTH = Dimensions.get('window').width;
const CAROUSEL_VERTICAL_OUTPUT = 30;
const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;


const feeds = [
    {   
        id: 1,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 2,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 3,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 4,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 5,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 6,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 7,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
    {   
        id: 8,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },  
]
const toturailsData = [
    {   
        id: 1,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 2,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 3,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 4,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 5,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 6,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 7,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
    {   
        id: 8,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },  
]



function Feed(props) {
    let [fontsLoaded] = useFonts({
        'ZermattFirst': require('../assets/fonts/ZermattFirst.otf'),
        'AvianoFlareRegular': require('../assets/fonts/AvianoFlareRegular.otf'),
        'sofiaprolight': require('../assets/fonts/sofiaprolight.otf'),
        });

    const [feedBarBack, setFeedBarBack] = useState(colors.primary);
    const [feedBarFont, setFeedBarFont] = useState(colors.feedBar);

    const [tutoBarBack, setTutoBarBack] = useState(colors.feedBar);
    const [tutoBarFont, setTutoBarFont] = useState(colors.primary);

    const [favBarBack, setFavBarBack] = useState(colors.feedBar);
    const [favBarFont, setFavBarFont] = useState(colors.primary);

    const handleTutorial = () => {
        setFeedBarBack(colors.feedBar)
        setFeedBarFont(colors.primary)

        setTutoBarBack(colors.primary)
        setTutoBarFont(colors.feedBar)

        setFavBarBack(colors.feedBar)
        setFavBarFont(colors.primary)
    }

    const handleFeed = () => {
        setFeedBarBack(colors.primary)
        setFeedBarFont(colors.feedBar)

        setTutoBarBack(colors.feedBar)
        setTutoBarFont(colors.primary)

        setFavBarBack(colors.feedBar)
        setFavBarFont(colors.primary)
    }

    const handleFav = () => {
        setFeedBarBack(colors.feedBar)
        setFeedBarFont(colors.primary)

        setTutoBarBack(colors.feedBar)
        setTutoBarFont(colors.primary)

        setFavBarBack(colors.primary)
        setFavBarFont(colors.feedBar)
    }
    
    if(!fontsLoaded) {
        return null 
    }

    let dummy = [1]
    return (
        <SafeAreaView  style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView style={styles.scrollView}>


                <View style={styles.feedContainer}>

                    {/* MIMI */}
                        <View style={styles.feedCards3} >
                            <View >
                                <Text style={[styles.feedM, {fontFamily: 'ZermattFirst'}]} >M</Text>
                            </View>
                            <View style={{flexDirection: 'column', left: 25}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: colors.primary,fontFamily: 'AvianoFlareRegular', fontSize:30}} >mimi</Text>
                                    <MaterialCommunityIcons style={{ marginLeft: "45%"}} size={35} color={colors.primary} name="dots-horizontal" />
                                </View>
                                <View>
                                    <Text style={{color: colors.tertiary, fontFamily: 'sofiaprolight', fontSize:25}} >Communtiy</Text>
                                </View>
                                
                                <View>
                                    <TouchableOpacity style={{maxWidth: 120, marginTop: 10, borderWidth: 1, borderColor:colors.primary, alignItems: 'center'}}>
                                        <Text style={{color: colors.primary, padding: 10}}>Edit Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Nav Bar */}

                    <View style={{ backgroundColor: colors.feedBar, width: "100%", height: 65, flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{ width: "33.33%", backgroundColor:feedBarBack, padding: 22, Paddingeft: 20, flexDirection: 'row'}} >
                            <MaterialCommunityIcons onPress={() => handleFeed()} color={feedBarFont} name="menu" size={20} />
                            <Text onPress={() => handleFeed()} style={{fontFamily: 'AvianoFlareRegular', fontSize: 12, color:feedBarFont, paddingLeft:3}}>Feed</Text>
                        </View>
                        
                        <View  style={{ width: "33.33%", backgroundColor:tutoBarBack, padding: 22, Paddingeft: 20, flexDirection: 'row'}} >
                            <MaterialCommunityIcons onPress={()=>handleTutorial()} color={tutoBarFont} name="layers-triple-outline" size={20} />
                            <Text onPress={()=>handleTutorial()} style={{fontFamily: 'AvianoFlareRegular', fontSize: 12, color:tutoBarFont, paddingLeft:3}}>Tutorials</Text>
                        </View>
                        
                        <View style={{ width: "33.33%", backgroundColor:favBarBack, padding: 22, Paddingeft: 20, flexDirection: 'row'}} >
                            <MaterialCommunityIcons onPress={() => handleFav()} color={favBarFont} name="heart-outline" size={20} />
                            <Text onPress={() => handleFav()} style={{fontFamily: 'AvianoFlareRegular', fontSize: 12, color:favBarFont, paddingLeft:3}}>Favorites</Text>
                        </View>
                    </View>

                    {/* feed Component */}
                    {/* <ScrollView style={{flexDirection:'row', marginLeft: -5, marginTop: 20}} >
                        <View style={{borderRadius: 2, borderStyle: 'dashed' ,marginBottom: -200, left:5, alignItems: 'center', justifyContent: 'center',maxWidth:195, maxHeight:195, minHeight:195, borderWidth: 2,borderColor: colors.primary}} >
                            <MaterialCommunityIcons color={colors.primary} size={80} name="plus" />
                            <Text style={{color: colors.primary}}>Add Photos</Text>
                        </View>

                        <FlatList
                            data={feeds}
                            keyExtractor={item => item.id}     //has to be unique   
                            renderItem={({item, index}) => <FeedCard lastChild={feeds.length}  id={item.id} subHeading={item.subHeading} heading={item.heading} hashTags={item.hashTags} likes={item.likes} picture={item.picture} />} //method to render the data in the way you want using styling u need
                            horizontal={false}
                            numColumns={2}
                        />
                    </ScrollView> */}

                    {/* Tutorials */}
                    <ScrollView style={{flexDirection:'row', marginLeft: -5, marginTop: 20}} >
                        
                        <FlatList
                            data={toturailsData}
                            keyExtractor={item => item.id}     //has to be unique   
                            renderItem={({item, index}) => <ListCard screenWidth={screenWidth} picture={item.picture} heading={item.heading} hashTags={item.hashTags} time={item.time} serve={item.serve} />} //method to render the data in the way you want using styling u need
                            horizontal={false}
                            numColumns={1}
                        />
                    </ScrollView>

                    
                    

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
        marginTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        // backgroundColor: 'red',
        width:'100%'
    },
    scrollView: {
        flex: 1,
        // justifyContent: 'center',
        width:'95%',

        // backgroundColor: 'pink',
        // marginHorizontal: 20,
    },
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom:30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    feedCards3: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 20

    },
    feedM: {
        fontSize: 65,
        color: 'white',
        padding: 35, paddingLeft: 40, paddingRight:40,
        backgroundColor:colors.secondary,
        maxWidth:(screenWidth/2) -65, maxHeight: 140
    }
})

export default Feed;