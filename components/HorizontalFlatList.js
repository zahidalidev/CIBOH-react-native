import React, {Component} from 'react';
import {AppRegistry, FlatList, Text, View, Image, ImageBackground, 
    Alert, Platform, TouchableOpacity, TouchableHighlight, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-paper';
import Constants from 'expo-constants'

import imgSample from "../assets/images/Oval.png"

const data = [
    {
        name: "Thomas",
        picture: imgSample
    },
    {
        name: "Thomas",
        picture: imgSample
    },
    {
        name: "Thomas",
        picture: imgSample
    },
    {
        name: "Thomas",
        picture: imgSample
    },
    {
        name: "Thomas",
        picture: imgSample
    },
    {
        name: "Thomas",
        picture: imgSample
    },
]

class HorizontalFlatListItem extends Component {
    render(){
        return(
            <View style={styles.horizontalContainer} >
                <Avatar.Image style={{marginTop: 4}} size={70} source={this.props.item.picture} />
                <Text style={{marginTop: 10}} >{this.props.item.name}</Text>
            </View>
        );
    }
}


export default class HorizontalFlatList extends Component{
    render(){
        return(
            <View style={styles.container} >
                <View style={{height: 110}} >
                    <FlatList style={styles.flatList} 
                        showsHorizontalScrollIndicator={false}
                        horizontal={true} 
                        data={data}
                        renderItem={({item, index}) => {
                            return(
                                <HorizontalFlatListItem
                                    item={item}
                                    index={index}
                                    parentFlatList={this}
                                >

                                </HorizontalFlatListItem>
                            );
                        }}
                    >

                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    horizontalContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderStyle: 'dashed',
        borderRadius: 40,
        borderWidth: 1,
        margin: 4,

        
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: Constants.statusBarHeight
    },
    flatList: {
        // backgroundColor: "black",
    }
})