import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { ss } from './styles'
import IllustrationIMG from '../../assets/illustration.png'
import { StatusBar } from 'expo-status-bar'
import ButtonIcon from '../../components/ButtonIcon'

export function SignIn() {



    return (
        <View style={ss.container}>
            <StatusBar style={"light"} translucent />
            <Image source={IllustrationIMG} style={ss.styleImage} resizeMode={'stretch'} />
            <View style={ss.content}>
                <Text style={ss.title}>Organize{`\n`}suas jogatinas{`\n`}facilmente</Text>
                <Text style={ss.subtitle}>Crie grupos para jogar seus games{`\n`}favoritos com seus amigos</Text>
            </View>

            <ButtonIcon />
        </View>
    )
}