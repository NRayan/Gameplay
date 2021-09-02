import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/theme'
import { ss } from './style'

type Props = {
    children: ReactNode
}

export function Background({ children }: Props) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient style={ss.container} colors={[secondary80, secondary100]}>
            {children}
        </LinearGradient>
    )
}