import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/theme'
import { Background } from '../Background'
import { ss } from './style'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'


type Props = {
    title: string,
    action?: ReactNode
}
export function Header({ title, action }: Props) {

    const navigation = useNavigation();
    const { secondary100, secondary40, heading } = theme.colors;

    function HandleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient style={ss.container} colors={[secondary100, secondary40]}>

            <BorderlessButton onPress={HandleGoBack}>
                <Feather size={24} name="arrow-left" color={heading} />
            </BorderlessButton>

            <Text style={ss.title}>
                {title}
            </Text>

            {
                action &&
                <View>
                    {action}
                </View>
            }

        </LinearGradient>
    )
}