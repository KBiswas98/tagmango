import React from 'react'
import { View, Text , StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {size} from '../../utilits/constant'
import Icons from '../../components/atoms/Icons/Icons'
import Navbar from '../../components/organisams/Navbar/Navbar'
import Option from '../../components/organisams/Option/Option'
import {typo} from '../../utilits/style'

export default function Main() {
    return (
        <View syle={styles.body}>
            <ScrollView style={{ height: '92%'}}>
                <Text style={[typo.h1, { margin: 13}]}>Activity</Text>
                <View style={styles.optionContainer}>
                    <Option name="Video Shoutout" count={23} imagePath={require('../../assets/Group_3728.png')}/>
                    <Option name="Video Call" count={56} imagePath={require('../../assets/Group_3730.png')}/>
                    <Option name="Conferencing" count={11} imagePath={require('../../assets/Group_3732.png')}/>
                    <Option name="Review" count={110} imagePath={require('../../assets/Group_3734.png')}/>
                    <Option name="Comment" count={11} imagePath={require('../../assets/Group_3736.png')}/>
                    <Option name="Messaging" count={56} imagePath={require('../../assets/Group_3738.png')}/>
                </View>

            </ScrollView>
            <View style={styles.navigationContainer}>
                <Navbar/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        width: 100
    },
   navigationContainer: {
       position: 'relative',
       bottom: 0,
       backgroundColor: 'pink',
       paddingHorizontal: 10
   },
   optionContainer: {
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'wrap',
        justifyContent: 'center'       
   }
})