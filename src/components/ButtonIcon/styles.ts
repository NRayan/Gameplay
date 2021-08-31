import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const ss = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontSize: 15,
        color: theme.colors.heading,
        textAlign: 'center'
    },
    iconWrapper: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.line
    },
    icon: {
        height: 24,
        width: 24
    }
})