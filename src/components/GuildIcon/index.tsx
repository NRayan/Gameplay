import React from 'react'
import { View, Text, Image } from 'react-native'
import { CDN_IMG } from '../../configs'
import { ss } from './style'
import DiscordSvg from '../../assets/discord.svg'

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMG}/icons/${guildId}/${iconId}.png`


    // "https://i.pinimg.com/originals/5d/b5/b4/5db5b469edf32bb41f002482b784b894.png";
    return (
        <View style={ss.container}>
            {
                iconId ?
                    <Image source={{ uri }} style={ss.image} resizeMode="cover" />
                    :
                    <DiscordSvg width={40} height={40} />
            }
        </View>
    )
}