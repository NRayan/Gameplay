import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const ss = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8
    },
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})