import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { ss } from './style'

export function TextArea({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={ss.container}
            {...rest}
        />
    )
}