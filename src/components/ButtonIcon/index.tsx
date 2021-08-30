import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { ss } from './styles'
import discordicon from '../../assets/discord.png'

export default function ButtonIcon() {
    return (
        <TouchableOpacity style={ss.container}>
            <View style={ss.iconWrapper}>
                <Image source={discordicon} />
                <Text>Entre com o discord</Text>
            </View>
        </TouchableOpacity>
    )
}