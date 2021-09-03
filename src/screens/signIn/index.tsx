import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { ss } from './styles'
import IllustrationIMG from '../../assets/illustration.png'

import ButtonIcon from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

export function SignIn() {

    return (
        <Background>
            <Image source={IllustrationIMG} style={ss.styleImage} resizeMode={'stretch'} />
            <View style={ss.content}>
                <Text style={ss.title}>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Text>
                <Text style={ss.subtitle}>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Text>
                <ButtonIcon title="Entre com Discord" activeOpacity={0.7} />
            </View>
        </Background>
    )
}