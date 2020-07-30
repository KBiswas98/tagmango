import React from 'react'
import { View, Text , Image, StyleSheet, Dimensions } from 'react-native'
import Tag from '../../atoms/Tag/Tag'
import {typo} from '../../../utilits/style'

export default function Option({
    name = 'no name',
    count = 0,
    imagePath = require('../../../assets/Group_3728.png')
}) {

    return (
        <View style={styles.option}>
            <View style={styles.imageContainer}>
                <Image style={styles.bgImage} source={imagePath}/>
            </View>
            <View style={styles.content}>
                <Text style={[typo.h3, typo.bold, typo.white, styles.count]}>{count}</Text>
                <Text style={[typo.h4, typo.white, styles.text]}>{name}</Text>
                <View  style={styles.tagContainer}>
                    <Tag no={15}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    count: {
        position: 'absolute',
        left: 20,
        top: 25
    },
    text: {
        position: 'absolute',
        left: 20,
        top: 47,
        fontWeight: '800'
    },
    option: {
        position: 'relative',
        margin: 6,
    },
    bgImage: {
        height: 80,
        width: '100%',
        borderRadius: 5
        
    },
    content: {
        position: 'absolute'
    },
    imageContainer: {
        width:  Dimensions.get('window').width/2 -20,
    },
    tagContainer: {
        position: 'absolute',
        left: 70,
        top: 10
    }
})