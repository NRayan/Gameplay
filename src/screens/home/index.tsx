import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Appointments } from '../../components/Appointments'
import { Background } from '../../components/Background'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import Profile from '../../components/Profile'
import { ss } from './style'

export function Home() {

    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Cognitivos',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ]

    function HandleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <View style={ss.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect categorySelected={category} setCategory={HandleCategorySelect} />
            <View style={ss.content}>
                <ListHeader title="Partidas agendadas" subtitle="total: 6" />
                <FlatList style={ss.matches} showsVerticalScrollIndicator={false}
                    data={appointments} keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                    (
                        <Appointments data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />} />
            </View>

        </Background>
    )
}
