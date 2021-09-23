import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 62,
        width: 66,
        marginRight: 20,
        backgroundColor: theme.colors.discord,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        height: 62,
        width: 66,

    }
})