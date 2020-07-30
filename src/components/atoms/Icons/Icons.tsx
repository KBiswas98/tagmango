import React from 'react'
import { View, Text, Image , StyleSheet} from 'react-native'

const defaultColor = {
    inactive: '#B8B8B8',
    active: '#000000'
}

export default function Icons({
    active = false,
    hasNewMessage = false,
    activeColor = defaultColor.active,
    inactiveColor = defaultColor.inactive,
    children 
    }) {
    return (
        <View style={active ? { opacity: 1 } : {opacity: 0.3}}>
            {
                hasNewMessage && <View style={styles.haveMessage}></View>
            } 
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    haveMessage: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: '#fff',
        position: 'absolute',
        left: 16,
        top: 3,
        zIndex: 3000,
    }
})