import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { ss } from './styles'
import IllustrationIMG from '../../assets/illustration.png'
import { useNavigation } from '@react-navigation/core'
import ButtonIcon from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <Background style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={IllustrationIMG} style={ss.styleImage} resizeMode={'stretch'} />
            <View style={ss.content}>
                <Text style={ss.title}>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Text>
                <Text style={ss.subtitle}>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Text>
                <ButtonIcon title="Entre com Discord" onPress={handleSignIn} />
            </View>
        </Background>
    )
}