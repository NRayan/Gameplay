import React, { useState } from 'react'
import { Background } from '../../components/Background'
import { ModalView } from '../../components/ModalView'
import { Header } from '../../components/Header'
import { GuildIcon } from '../../components/GuildIcon'
import { KeyboardAvoidingView, Platform, Text, View, Modal } from 'react-native'
import CategorySelect from '../../components/CategorySelect'
import { SmallInput } from '../../components/SmallInput'
import uuid from 'react-native-uuid'

import { ss } from './style'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/theme'
import { TextArea } from '../../components/TextArea'
import Button from '../../components/Button'
import { Guilds } from '../Guilds'
import { useLinkBuilder, useNavigation } from '@react-navigation/native'
import { GuildProps } from '../../components/Guild'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS, COLLECTION_USER } from '../../configs/database'

export function AppointmentCreate() {

    const navigation = useNavigation();

    const [category, setCategory] = useState('');
    const [openguildsModal, setOpenguildsModal] = useState(false);

    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    function HandleOpenGuilds() {
        setOpenguildsModal(true);
    }

    function HandleCloseGuilds() {
        setOpenguildsModal(false);
    }

    function HandleGuildSelected(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenguildsModal(false);
    }

    async function HandleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description: description
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment]));

        navigation.navigate('Home');

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={ss.container}>

            <Background>

                <ScrollView>

                    <Header title="Agendar partida" />

                    <Text style={[ss.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Categoria
                    </Text>

                    <CategorySelect hasCheckBox setCategory={setCategory} categorySelected={category} />

                    <View style={ss.form}>

                        <RectButton onPress={HandleOpenGuilds}>
                            <View style={ss.select}>

                                {
                                    guild.icon ?
                                        <GuildIcon guildId={guild.id} iconId={guild.icon} />
                                        :
                                        <View style={ss.image} />
                                }

                                <View style={ss.selectBody}>
                                    <Text style={ss.label}>
                                        {
                                            guild.name ? guild.name : 'Selecione um servidor'
                                        }

                                    </Text>
                                </View>

                                <Feather name='chevron-right' color={theme.colors.heading} size={18} />

                            </View>
                        </RectButton>

                        <View style={ss.field}>

                            <View>
                                <Text style={[ss.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>

                                <View style={ss.column}>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setDay} />
                                    <Text style={ss.divider}>
                                        /
                                    </Text>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setMonth} />
                                </View>
                            </View>

                            <View>
                                <Text style={[ss.label, { marginBottom: 12 }]}>
                                    Hora e minuto
                                </Text>

                                <View style={ss.column}>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setHour} />
                                    <Text style={ss.divider}>
                                        :
                                    </Text>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setMinute} />
                                </View>
                            </View>

                        </View>

                        <View style={[ss.field, { marginBottom: 12 }]}>
                            <Text style={ss.label}>
                                Descrição
                            </Text>

                            <Text style={ss.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText={setDescription} />

                        <View style={ss.footer}>
                            <Button title="Agendar" onPress={HandleSave} />
                        </View>

                    </View>

                </ScrollView>

            </Background >

            <ModalView visible={openguildsModal} closeModal={HandleCloseGuilds}>
                <Guilds handleGuildSelect={HandleGuildSelected} />
            </ModalView>

        </KeyboardAvoidingView>
    )
}