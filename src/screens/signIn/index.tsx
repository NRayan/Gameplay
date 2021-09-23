import React, { useContext } from 'react'
import { View, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import { ss } from './styles'
import IllustrationIMG from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

import { useAuth } from '../../hooks/auth'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { theme } from '../../global/theme'

export function SignIn() {

    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {

        }
    }

    return (
        <Background style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={IllustrationIMG} style={ss.styleImage} resizeMode={'stretch'} />
            <View style={ss.content}>
                <Text style={ss.title}>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Text>
                <Text style={ss.subtitle}>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Text>

                {
                    loading ?
                        <ActivityIndicator size={24} color={theme.colors.primary} />
                        :
                        <ButtonIcon title="Entre com Discord" onPress={handleSignIn} />
                }

            </View>
        </Background>
    )
}