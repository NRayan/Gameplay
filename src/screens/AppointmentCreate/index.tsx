import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ss } from './style'
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/theme'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon'

export function AppointmentCreate() {
    const members = [
        {
            id: '1',
            username: 'Norton',
            avatar_url: 'https://github.com/NRayan.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Douglas',
            avatar_url: 'https://github.com/NRayan.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" color={theme.colors.primary} size={24} />
                    </BorderlessButton>
                }
            />

            <ImageBackground source={BannerImg} style={ss.banner}>
                <View style={ss.bannercontent}>
                    <Text style={ss.title}>
                        Lendários
                    </Text>
                    <Text style={ss.subtitle}>
                        É hoje que ganhamos o challenger pra não sei o que
                    </Text>
                </View>
            </ImageBackground>


            <ListHeader title="Jogadores" subtitle="Total 3" />
            <FlatList style={ss.members} data={members} keyExtractor={item => item.id}
                ItemSeparatorComponent={() =>
                    <ListDivider />
                }
                renderItem={({ item }) =>
                    <Member data={item} />
                } />


            <View style={ss.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>

        </Background >
    )
}