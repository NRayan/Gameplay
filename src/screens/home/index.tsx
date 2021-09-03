import React from 'react'
import { View, Text } from 'react-native'
import { Background } from '../../components/Background'
import Profile from '../../components/Profile'
import { ss } from './style'

export function Home() {
    return (
        <Background>
            <View style={ss.header}>
                <Profile />
            </View>
        </Background>
    )
}
