import React from 'react'
import { View, Text, Image } from 'react-native'
import { ss } from './style'

export function GuildIcon() {
    const uri = "https://i.pinimg.com/originals/5d/b5/b4/5db5b469edf32bb41f002482b784b894.png";
    return (
        <View style={ss.container}>
            <Image source={{ uri }} style={ss.image} resizeMode="cover" />
        </View>
    )
}