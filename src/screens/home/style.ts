import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:
    {
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    },
})