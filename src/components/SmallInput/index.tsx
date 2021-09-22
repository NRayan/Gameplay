import React from 'react'
import { TextInput, TextInputProps, View, Text } from 'react-native'
import { ss } from './style'

export function SmallInput({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={ss.container}
            {...rest}
            keyboardType='numeric'
        />
    )
}