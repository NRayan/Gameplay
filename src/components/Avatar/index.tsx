import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image } from 'react-native'
import { theme } from '../../global/theme';
import { ss } from './styles'

type Props = {
    urlImage: string
}

export default function Avatar({ urlImage }: Props) {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <LinearGradient style={ss.container} colors={[secondary50, secondary70]}>
            <Image source={{ uri: urlImage }} style={ss.avatar} />
        </LinearGradient>
    )
}