import React from 'react'
import { View, Text } from 'react-native'
import { ss } from './style'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from '../../global/theme'


export default function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton style={ss.container} {...rest}>
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24} />
        </RectButton >
    )
}