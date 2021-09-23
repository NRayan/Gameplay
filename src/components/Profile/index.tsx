import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useAuth } from '../../hooks/auth'
import Avatar from '../Avatar'
import { ss } from './style'

export default function Profile() {

    const { user } = useAuth();

    return (
        <View style={ss.container}>
            <Avatar urlImage={user.avatar} />

            <View>
                <View style={ss.user}>
                    <Text style={ss.greeting}>
                        Olá,
                    </Text>
                    <Text style={ss.username}>
                        {user.firstName}
                    </Text>
                </View>

                <Text style={ss.message}>
                    Hoje é dia de vitória
                </Text>

            </View>
        </View>
    )
}