import React, { useState } from 'react'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { GuildIcon } from '../../components/GuildIcon'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import CategorySelect from '../../components/CategorySelect'
import { SmallInput } from '../../components/SmallInput'

import { ss } from './style'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/theme'
import { TextArea } from '../../components/TextArea'
import Button from '../../components/Button'

export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={ss.container}>
            <ScrollView>
                {/* <Background> */}
                <Header title="Agendar partida" />
                <Text style={[ss.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                    Categoria
                </Text>

                <CategorySelect hasCheckBox setCategory={setCategory} categorySelected={category} />

                <View style={ss.form}>

                    <RectButton>
                        <View style={ss.select}>

                            {
                                // <View style={ss.image} />
                                <GuildIcon />
                            }

                            <View style={ss.selectBody}>
                                <Text style={ss.label}>
                                    Selecione um servidor
                                </Text>
                            </View>

                            <Feather name='chevron-right' color={theme.colors.heading} size={18} />

                        </View>
                    </RectButton>

                    <View style={ss.field}>

                        <View>
                            <Text style={ss.label}>
                                Dia e mês
                            </Text>

                            <View style={ss.column}>
                                <SmallInput maxLength={2} />
                                <Text style={ss.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={ss.label}>
                                Hora e minuto
                            </Text>

                            <View style={ss.column}>
                                <SmallInput maxLength={2} />
                                <Text style={ss.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
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

                    <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />

                    <View style={ss.footer}>
                        <Button title="Agendar" />
                    </View>

                </View>

                {/* </Background > */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}