import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text, Image } from 'react-native'
import { ss } from './styles'
import discordicon from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
    title: string;
}

export default function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={ss.container} {...rest}>
            <View style={ss.iconWrapper}>
                <Image source={discordicon} />
            </View>
            <Text style={ss.title}>{title}</Text>

        </TouchableOpacity>
    )
}