import React from 'react'
import { View, Text } from 'react-native'
import { Background } from '../../components/Background'
import ButtonAdd from '../../components/ButtonAdd'
import Profile from '../../components/Profile'
import { ss } from './style'

export function Home() {
    return (
        <Background>
            <View style={ss.header}>
                <Profile />
                <ButtonAdd />
            </View>
        </Background>
    )
}
