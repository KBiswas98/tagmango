import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from '../../atoms/Icons/Icons'
import {size} from '../../../utilits/constant'
import {layout} from '../../../utilits/style'

export default function Navbar() {
    return (
        <View style={[layout.row, layout.container]}>
            <Icons active hasNewMessage>
                <Icon name="compass-outline" style={{fontSize: size.navIconSize}}/>
            </Icons>
            <Icons >
                <Icon name="search-outline" style={{fontSize: size.navIconSize}}/>
            </Icons>
            <Icons >
                <Icon name="mail-outline" style={{fontSize: size.navIconSize}}/>
            </Icons>
            <Icons  >
                <Icon name="ios-person-outline" style={{fontSize: size.navIconSize}}/>
            </Icons>
        </View>
    )
}

