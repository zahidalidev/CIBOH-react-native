import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import ProgressCircle from 'react-native-progress-circle'

import StarRating from '../components/StarRating';
import colors from '../config/colors';

import rectangleDetail1 from "../assets/images/rectangleDetail1.png"
import rectangleDetail2 from "../assets/images/rectangleDetail2.png"
import rectangleDetail3 from "../assets/images/rectangleDetail3.png"
import rectangleDetail4 from "../assets/images/rectangleDetail4.png"
import rectangleDetail5 from "../assets/images/rectangleDetail5.png"
import Oval from "../assets/images/Oval.png"

function Detail(props) {

    const [currentRating, setCurrentRating] = useState(2)

    const [backgroundIngrButton1, setBackgroundIngrButton1] = useState(colors.primary)
    const [textIngreColor1, setTextIngreColor1] = useState('white')

    const [backgroundIngrButton2, setBackgroundIngrButton2] = useState('#eeeeee')
    const [textIngreColor2, setTextIngreColor2] = useState('black')

    // only five allow
    const [reviewImages, setReviewImages] = useState([
        {
            image: rectangleDetail2
        },
        {
            image: rectangleDetail2
        },
        {
            image: rectangleDetail2
        },
        {
            image: rectangleDetail2
        },
        {
            image: rectangleDetail2
        }
    ])

    const [ingredients, setIngredients] = useState([
        {
            title: 'Flour',
            tableSpoon: '4 tablespoons'
        },
        {
            title: 'Sugar',
            tableSpoon: '3 tablespoons'
        },
        {
            title: 'Cocoa powder',
            tableSpoon: '2 tablespoons'
        },
        {
            title: 'Baking powder',
            tableSpoon: '1/2 tablespoons'
        },
        {
            title: 'Milk',
            tableSpoon: '3 tablespoons'
        },
        {
            title: 'Oil, vegetable  or canola',
            tableSpoon: '1 tablespoon'
        },
        {
            title: 'Vanilla extract',
            tableSpoon: '1 tablespoon'
        },
        {
            title: 'Chocolate hazelnut spread, plus more for topping',
            tableSpoon: '1 tablespoon'
        },
        {
            title: 'Powdered sugar, for topping, optional',
            tableSpoon: '1 tablespoon'
        }
    ])


    const handleRating = (rating) => {
        setCurrentRating(rating)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>

                {/* header background image */}
                <ImageBackground resizeMode="stretch" style={{ alignItems: 'center', justifyContent: 'flex-end', width: "100%", height: RFPercentage(27) }} source={rectangleDetail1} >
                    <View style={styles.topImageShade} ></View>
                    <View style={{ width: "90%", marginBottom: RFPercentage(2) }} >
                        <Text style={{ fontSize: RFPercentage(2.6), color: 'white', fontFamily: 'AvianoFlareRegular' }} >Make yummilicious breakfast for yourself</Text>
                    </View>
                </ImageBackground>

                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    {/* custom component */}
                    <StarRating onHandleRating={handleRating} onCurrentRating={currentRating} maxRating={5} />

                    <Text style={{ marginTop: RFPercentage(2.9), fontSize: RFPercentage(3.5), color: 'black', fontFamily: "ZermattFirst" }} >19 Ratings</Text>

                    <View style={{ marginTop: RFPercentage(3.5), width: '90%', marginRight: '5%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity>
                                <MaterialCommunityIcons size={RFPercentage(3.5)} color={colors.primary} name="heart" />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: RFPercentage(1), color: colors.primary, fontSize: RFPercentage(3) }} >10</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity>
                                <MaterialCommunityIcons size={RFPercentage(3.5)} color={colors.primary} name="bookmark-outline" />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: RFPercentage(1), color: colors.primary, fontSize: RFPercentage(3) }} >Save</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity>
                                <MaterialCommunityIcons size={RFPercentage(3.5)} color={colors.primary} name="share-variant" />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: RFPercentage(1), color: colors.primary, fontSize: RFPercentage(3) }} >Share</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: RFPercentage(5), flexDirection: 'row', borderColor: '#1E2022', borderTopWidth: 0.2, borderBottomWidth: 0.2 }} >
                    <View style={{ margin: RFPercentage(3) }} >
                        <Image source={Oval} style={{ borderRadius: RFPercentage(5), width: RFPercentage(10), height: RFPercentage(10) }} />
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }} >
                        <View>
                            <Text style={{ fontSize: RFPercentage(2), fontFamily: 'AvianoFlareRegular', color: 'blacks' }} >Umar Farooq</Text>
                        </View>
                        <View style={{ marginTop: RFPercentage(1) }} >
                            <Text style={{ fontSize: RFPercentage(2.5), fontFamily: 'sofiaprolight', color: colors.primary }} >Chef at kitchen stories</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: '95%', padding: RFPercentage(3), flexDirection: 'column', borderColor: '#1E2022', borderBottomWidth: 0.2 }} >
                    <View style={{ marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Reviews</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} >
                            <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', fontFamily: "sofiaprolight" }} >Read  {'>'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(1), marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <Text style={{ fontFamily: 'sofiaprolight', color: colors.primary, fontSize: RFPercentage(2.5) }} >18 images {'&'} 36 comments</Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(2), marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        {reviewImages.map((revImg, index) => (
                            <Image key={index} source={revImg.image} style={{ marginRight: RFPercentage(0.6), width: RFPercentage(7.8), height: RFPercentage(7.8) }} />
                        ))}
                    </View>

                </View>

                {/* Difficulty */}
                <View style={{ width: '95%', padding: RFPercentage(3), paddingBottom: RFPercentage(5), paddingTop: RFPercentage(5), flexDirection: 'column', borderColor: '#1E2022', borderBottomWidth: 0.2 }} >
                    <View style={{ marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <Text style={{ fontFamily: 'ZermattFirst', color: 'black', fontSize: RFPercentage(3.4) }} >Difficulty : </Text>
                        <Text style={{ fontFamily: 'ZermattFirst', color: colors.primary, fontSize: RFPercentage(3.4) }} >Easy</Text>
                    </View>
                </View>

                {/* steps timing */}
                <View style={{ width: '95%', padding: RFPercentage(3), paddingBottom: RFPercentage(4), paddingTop: RFPercentage(4), flexDirection: 'column', borderColor: '#1E2022', borderBottomWidth: 0.2 }} >
                    <View style={{ marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <ProgressCircle
                                percent={85}
                                radius={40}
                                borderWidth={RFPercentage(1.3)}
                                color="#eeeeee"
                                shadowColor={colors.primary}
                                bgColor="#fff"
                            >
                                <Text style={{ color: colors.primary, fontSize: RFPercentage(1.5), fontFamily: 'sofiaprolight' }}>{'15 mint'}</Text>
                            </ProgressCircle>
                            <Text style={{ marginTop: RFPercentage(2.4), fontSize: RFPercentage(3), fontFamily: 'ZermattFirst', color: 'black' }} >Cooking</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <ProgressCircle
                                percent={45}
                                radius={40}
                                borderWidth={RFPercentage(1.3)}
                                color="#eeeeee"
                                shadowColor={colors.primary}
                                bgColor="#fff"
                            >
                                <Text style={{ color: colors.primary, fontSize: RFPercentage(1.5), fontFamily: 'sofiaprolight' }}>{'50 mint'}</Text>
                            </ProgressCircle>
                            <Text style={{ marginTop: RFPercentage(2.4), fontSize: RFPercentage(3), fontFamily: 'ZermattFirst', color: 'black' }} >Baking</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <ProgressCircle
                                percent={45}
                                radius={40}
                                borderWidth={RFPercentage(1.3)}
                                color="#eeeeee"
                                shadowColor={colors.primary}
                                bgColor="#fff"
                            >
                                <Text style={{ color: colors.primary, fontSize: RFPercentage(1.5), fontFamily: 'sofiaprolight' }}>{'50 mint'}</Text>
                            </ProgressCircle>
                            <Text style={{ marginTop: RFPercentage(2.4), fontSize: RFPercentage(3), fontFamily: 'ZermattFirst', color: 'black' }} >Resting</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: '95%', padding: RFPercentage(3), flexDirection: 'column', borderColor: '#1E2022', borderBottomWidth: 0.2 }} >
                    <View style={{ marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text numberOfLines={1} style={{ minWidth: "120%", fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Ingredients</Text>
                            <Text style={{ color: 'grey', fontSize: RFPercentage(2), fontFamily: 'sofiaprolight' }} >for 1 servings</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                            <TouchableOpacity onPress={() => {
                                setBackgroundIngrButton1(colors.primary)
                                setTextIngreColor1('white')
                                setBackgroundIngrButton2('#eeeeee')
                                setTextIngreColor2('black')
                            }} style={{ padding: 2, backgroundColor: backgroundIngrButton1 }} >
                                <MaterialCommunityIcons color={textIngreColor1} size={20} name="plus" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setBackgroundIngrButton1('#eeeeee')
                                setTextIngreColor1('black')
                                setBackgroundIngrButton2(colors.primary)
                                setTextIngreColor2('white')
                            }} style={{ padding: 2, backgroundColor: backgroundIngrButton2 }} >
                                <MaterialCommunityIcons color={textIngreColor2} size={20} name="minus" />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'column', marginTop: RFPercentage(1) }} >
                        {ingredients.map((ingred, index) => (
                            <View style={{ borderBottomWidth: 0.2, paddingTop: RFPercentage(1.7), paddingBottom: RFPercentage(1.7), marginLeft: '1.7%', flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }} >
                                    <Text style={{ lineHeight: RFPercentage(3), color: 'grey', fontSize: RFPercentage(2.1), fontFamily: 'sofiaprolight' }} >{ingred.title}</Text>
                                </View>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} >
                                    <Text style={{ color: 'black', fontSize: RFPercentage(1.8), fontFamily: "sofiaprolight" }} >{ingred.tableSpoon}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}

                        <TouchableOpacity style={{ marginTop: RFPercentage(2), marginLeft: '3%', flex: 1, paddingBottom: RFPercentage(1), paddingTop: RFPercentage(1), backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.3), color: 'white' }} >Add to ingrdients list</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ marginLeft: '1.7%', flex: 1, width: '95%', padding: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Nutritional value</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(1.5) }} >
                        <View style={{ flex: 1, flexDirection: 'column' }} >
                            <Text style={{ color: 'black', fontSize: RFPercentage(2.2), fontFamily: 'sofiaprolight' }} >Cal</Text>
                            <Text style={{ marginTop: RFPercentage(1), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >1045</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }} >
                            <Text style={{ color: 'black', fontSize: RFPercentage(2.2), fontFamily: 'sofiaprolight' }} >Protein</Text>
                            <Text style={{ marginTop: RFPercentage(1), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >40 g</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }} >
                            <Text style={{ color: 'black', fontSize: RFPercentage(2.2), fontFamily: 'sofiaprolight' }} >Fat</Text>
                            <Text style={{ marginTop: RFPercentage(1), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >34 g</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }} >
                            <Text style={{ color: 'black', fontSize: RFPercentage(2.2), fontFamily: 'sofiaprolight' }} >Carb</Text>
                            <Text style={{ marginTop: RFPercentage(1), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >146 g</Text>
                        </View>
                    </View>
                </View>


                <View style={{ marginLeft: '1.7%', flex: 1, width: '95%', padding: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Utensils</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ lineHeight: RFPercentage(3), marginTop: RFPercentage(1), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >Oven, 2 knife, 1 cutting board, 2 bowls, spatula, food processor, springform pan, citrus press, rubber spatula</Text>
                    </View>
                </View>

                <View>
                    <View style={{ backgroundColor: "#F5F5F5", marginLeft: '1.7%', flex: 1, width: '100%', padding: RFPercentage(2), paddingLeft: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Step 1/3</Text>
                    </View>

                    <View style={{ marginLeft: '1.7%', flex: 1, width: '96%', padding: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Image resizeMode="stretch" style={{ width: "100%", height: RFPercentage(23) }} source={rectangleDetail3} />
                    </View>

                    <View style={{ marginLeft: '1.7%', flex: 1, width: '96%', paddingRight: RFPercentage(3), paddingLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <FontAwesome name="book" size={RFPercentage(2.5)} color={colors.primary} />
                        <Text style={{ maxWidth: "90%", marginLeft: RFPercentage(1), lineHeight: RFPercentage(3), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >In a 12-ounce (375 ml) mug or larger, mix all ingredients (except the chocolate hazelnut spread) until just combined.</Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), marginLeft: '1.7%', flex: 1, width: '96%', paddingRight: RFPercentage(3), paddingLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <MaterialCommunityIcons name="pot-mix" size={RFPercentage(2.5)} color={colors.primary} />
                        <Text style={{ maxWidth: "90%", marginLeft: RFPercentage(1), lineHeight: RFPercentage(3), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >In a 12-ounce (375 ml) mug or larger, mix all ingredients (except the chocolate hazelnut spread) until just combined.</Text>
                    </View>
                </View>
                <View>
                    <View style={{ backgroundColor: "#F5F5F5", marginLeft: '1.7%', flex: 1, width: '100%', padding: RFPercentage(2), paddingLeft: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Step 2/3</Text>
                    </View>

                    <View style={{ marginLeft: '1.7%', flex: 1, width: '96%', padding: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Image resizeMode="stretch" style={{ width: "100%", height: RFPercentage(23) }} source={rectangleDetail4} />
                    </View>

                    <View style={{ marginLeft: '1.7%', flex: 1, width: '96%', paddingRight: RFPercentage(3), paddingLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <FontAwesome name="book" size={RFPercentage(2.5)} color={colors.primary} />
                        <Text style={{ maxWidth: "90%", marginLeft: RFPercentage(1), lineHeight: RFPercentage(3), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >In a 12-ounce (375 ml) mug or larger, mix all ingredients (except the chocolate hazelnut spread) until just combined.</Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), marginLeft: '1.7%', flex: 1, width: '96%', paddingRight: RFPercentage(3), paddingLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <MaterialCommunityIcons name="pot-mix" size={RFPercentage(2.5)} color={colors.primary} />
                        <Text style={{ maxWidth: "90%", marginLeft: RFPercentage(1), lineHeight: RFPercentage(3), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >In a 12-ounce (375 ml) mug or larger, mix all ingredients (except the chocolate hazelnut spread) until just combined.</Text>
                    </View>
                </View>
                <View style={{ marginBottom: RFPercentage(5) }} >
                    <View style={{ backgroundColor: "#F5F5F5", marginLeft: '1.7%', flex: 1, width: '100%', padding: RFPercentage(2), paddingLeft: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: RFPercentage(3.4), fontFamily: 'ZermattFirst' }} >Step 3/3</Text>
                    </View>

                    <View style={{ marginLeft: '1.7%', flex: 1, width: '96%', padding: RFPercentage(3), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Image resizeMode="stretch" style={{ width: "100%", height: RFPercentage(23) }} source={rectangleDetail5} />
                    </View>

                    <View style={{ marginLeft: '1.7%', flex: 1, width: '96%', paddingRight: RFPercentage(3), paddingLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <FontAwesome name="book" size={RFPercentage(2.5)} color={colors.primary} />
                        <Text style={{ maxWidth: "90%", marginLeft: RFPercentage(1), lineHeight: RFPercentage(3), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >In a 12-ounce (375 ml) mug or larger, mix all ingredients (except the chocolate hazelnut spread) until just combined.</Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), marginLeft: '1.7%', flex: 1, width: '96%', paddingRight: RFPercentage(3), paddingLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <MaterialCommunityIcons name="pot-mix" size={RFPercentage(2.5)} color={colors.primary} />
                        <Text style={{ maxWidth: "90%", marginLeft: RFPercentage(1), lineHeight: RFPercentage(3), fontSize: RFPercentage(1.8), color: 'grey', fontFamily: 'sofiaprolight' }} >In a 12-ounce (375 ml) mug or larger, mix all ingredients (except the chocolate hazelnut spread) until just combined.</Text>
                    </View>
                </View>



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