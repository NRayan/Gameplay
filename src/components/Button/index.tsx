import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'
import { ss } from './styles'

type Props = RectButtonProps & {
    title: string;
}

export default function Button({ title, ...rest }: Props) {
    return (
        <RectButton style={ss.container} {...rest}>
            <Text style={ss.title}>{title}</Text>
        </RectButton>
    )
}