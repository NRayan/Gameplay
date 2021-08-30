import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background
    },
    styleImage: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40
    },
    title: {
        color: theme.colors.heading,
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 16
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    },

})