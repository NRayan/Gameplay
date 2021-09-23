import React from 'react'
import { View, Text } from 'react-native'
import { ss } from './style'

type Props = {
    isCentered?: Boolean
}

export function ListDivider({ isCentered }: Props) {
    return (
        <View style={[
            ss.container,
            isCentered ? {
                marginVertical: 12
            } :
                {
                    marginTop: 2,
                    marginBottom: 31
                }
        ]}
        />
    )
}