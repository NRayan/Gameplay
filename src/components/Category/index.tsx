import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { ss } from './styles'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/theme'

type Props = RectButtonProps &
{
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox: boolean
    checked?: boolean;
}
export function Category({
    title: Title,
    icon: Icon,
    checked = true,
    hasCheckBox = false,
    ...rest
}: Props) {

    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient style={ss.container} colors={[secondary50, secondary70]}>
                <LinearGradient style={[ss.content, { opacity: checked ? 1 : 0.4 }]} colors={[checked ? secondary85 : secondary50, secondary40]}>
                    {hasCheckBox &&
                        <View style={checked ? ss.checked : ss.check} />
                    }
                    <Icon width={48} height={48} />
                    <Text style={ss.title}>
                        {Title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton >
    )
}