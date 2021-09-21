import React from 'react'
import { View, Text } from 'react-native'
import { ss } from './style'

type Props = {
    title: string,
    subtitle: string
}
export function ListHeader({ title, subtitle }: Props) {
    return (
        <View style={ss.container}>
            <Text style={ss.title}>
                {title}
            </Text>
            <Text style={ss.subtitle}>
                {subtitle}
            </Text>
        </View>
    )
}