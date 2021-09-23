import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { theme } from '../../global/theme'
import { ss } from './styles'

export function Load() {
    return (
        <View style={ss.container}>
            <ActivityIndicator
                size={'large'}
                color={theme.colors.primary} />
        </View>
    )
}