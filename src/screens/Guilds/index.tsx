import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { GuildProps } from '../../components/Appointments'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { ss } from './style'

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
    const guild = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Chiqueiros',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Chiqueiros',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
    ]
    
    return (
        <View style={ss.container}>
            <FlatList
                style={ss.guilds}
                data={guild}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                renderItem={({ item }) =>
                    <Guild data={item} onPress={() => handleGuildSelect(item)} />
                }
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
            />
        </View>
    )
}