import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import { ss } from './styles'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/theme'

export type GuildProps = {
    id: string,
    name: string,
    icon: string | null,
    owner: boolean
}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={ss.container} activeOpacity={0.7} {...rest}>

            <GuildIcon />
            
            <View style={ss.content}>
                <View>
                    <Text style={ss.title}>
                        {data.name}
                    </Text>

                    <Text style={ss.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>

            </View>

            <Feather name="chevron-right" color={theme.colors.heading} size={24} />

        </TouchableOpacity>
    )
}