import React from 'react'
import { View, Text } from 'react-native'
import Profile from '../../components/Profile'
import { ss } from './style'

export function Home() {
    return (
        <View style={ss.container}>
            <View style={ss.header}>
                <Profile />
            </View>
        </View>
    )
}
