import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary100
    },
    styleImage: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 40
    },
    subtitle: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        lineHeight: 25
    },

})