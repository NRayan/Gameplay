import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { categories } from '../../utils/categories'
import { GuildIcon } from '../GuildIcon'
import { ss } from './style'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { theme } from '../../global/theme'

export type GuildProps = {
    name: string,
    owner: boolean,
}

export type AppointmentsProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    description: string
}

type Props = RectButtonProps & {
    data: AppointmentsProps
}

export function Appointments({ data, ...rest }: Props) {
    const [category] = categories.filter(x => x.id === data.category);
    const { owner } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={ss.container}>
                <GuildIcon />

                <View style={ss.content}>
                    <View style={ss.header}>
                        <Text style={ss.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={ss.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={ss.footer}>

                        <View style={ss.dateInfo}>
                            <CalendarSvg />
                            <Text style={ss.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={ss.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />
                            <Text style={[ss.players, { color: owner ? primary : on }]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </RectButton>
    )
}