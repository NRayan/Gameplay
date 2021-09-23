import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import React, { useCallback, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Appointments, AppointmentsProps } from '../../components/Appointments'
import { Background } from '../../components/Background'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Load } from '../../components/Load'
import Profile from '../../components/Profile'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { ss } from './style'

export function Home() {

    const navigation = useNavigation();
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetail')
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    async function loadAppointments() {
        setLoading(true);

        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storageResponse: AppointmentsProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storageResponse.filter(item => item.category == category))
        } else {
            setAppointments(storageResponse);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]))

    return (
        <Background>
            <View style={ss.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />


            {
                loading ?

                    <Load />
                    :

                    <>
                        <ListHeader title="Partidas agendadas" subtitle="total: 6" />
                        <FlatList style={ss.matches} showsVerticalScrollIndicator={false}
                            data={appointments} keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                            (
                                <Appointments data={item} onPress={handleAppointmentDetails} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }} />
                    </>
            }

        </Background>
    )
}
