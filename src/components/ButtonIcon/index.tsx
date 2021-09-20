import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'
import { ss } from './styles'
import discordicon from '../../assets/discord.png'

type Props = RectButtonProps & {
    title: string;
}

export default function ButtonIcon({ title, ...rest }: Props) {
    return (
        <RectButton style={ss.container} {...rest}>
            <View style={ss.iconWrapper}>
                <Image source={discordicon} />
            </View>
            <Text style={ss.title}>{title}</Text>

        </RectButton>
    )
}