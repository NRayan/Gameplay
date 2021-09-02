import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Avatar from '../Avatar'
import { ss } from './style'

export default function Profile() {
    return (
        <View style={ss.container}>
            <Avatar urlImage="https://github.com/NRayan.png" />

            <View>
                <View style={ss.user}>
                    <Text style={ss.greeting}>
                        Olá,
                    </Text>
                    <Text style={ss.username}>
                        Norton
                    </Text>
                </View>

                <Text style={ss.message}>
                    Hoje é dia de vitória
                </Text>

            </View>
        </View>
    )
}