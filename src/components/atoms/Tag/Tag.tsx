import React from 'react'
import { View, Text , StyleSheet} from 'react-native'

export default function Tag({ no = 0}) {
    return (
        <View style={{ position : 'relative'}}>
            <Text style={styles.text}>Pending:{no}</Text>
            <View style={styles.tag}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        opacity: .5,
        width: 85,
        height: 20,
        position: 'absolute'
    },
    text: {
        fontSize: 13,
        marginTop: 2,
        color: '#fff',
        opacity: 1,
        marginLeft: 10,
        fontWeight: 'bold',
        width: '100%'
    }
})
