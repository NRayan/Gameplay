import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/theme'
import { ss } from './style'
import { ViewStyle } from 'react-native'

type Props = {
    children: ReactNode,
    style?: ViewStyle
}

export function Background({ children, style }: Props) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient style={[ss.container, style]} colors={[secondary80, secondary100]}>
            {children}
        </LinearGradient>
    )
}