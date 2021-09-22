import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../global/theme'
import Avatar from '../Avatar'
import { ss } from './style'


export type MemberProps = {
    id: string,
    username: string,
    avatar_url: string,
    status: string
}

type Props = {
    data: MemberProps
}

export function Member({ data }: Props) {
    const isOnline = data.status === "online" ? true : false;
    const { on, primary } = theme.colors

    return (
        <View style={ss.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={ss.title}>
                    {data.username}
                </Text>

                <View style={ss.status}>

                    <View style={[
                        ss.bulletStatus,
                        {
                            backgroundColor: isOnline ? on : primary
                        }
                    ]} />

                    <Text style={ss.nameStatus}>
                        {
                            isOnline ? "Disponível" : "Ocupado"
                        }
                    </Text>
                </View>
            </View>
        </View>
    )
}