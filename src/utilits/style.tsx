import {StyleSheet} from 'react-native'

export const layout = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        margin: 10
    }
})

export const color = {
    primary: '#F18926',
    background: '#212121',
    secoendary: '#EBEDF2',
    background_lite: '#424242',
    background_ultra_lite: '#BDBDBD'
}

export const typo = {
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    h3: {
        fontSize: 20,
        color: '#000'
    },
    h4: {
        fontSize: 18,
        color: '#000'
    },
    bold: {
        fontWeight: 'bold'
    },
    white: {
        color: '#fff'
    }
}