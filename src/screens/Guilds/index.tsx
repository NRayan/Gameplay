import { isLoaded } from 'expo-font'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'
import { api } from '../../services/api'
import { ss } from './style'

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, [])

    return (
        <View style={ss.container}>
            {
                loading ?
                    <Load />
                    :
                    <FlatList
                        style={ss.guilds}
                        data={guilds}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        renderItem={({ item }) =>
                            <Guild data={item} onPress={() => handleGuildSelect(item)} />
                        }
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
                    />
            }

        </View>
    )
}