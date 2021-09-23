import React, { Children, ReactNode } from 'react'
import { View, Text, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'
import { ss } from './styles'

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}>

            <TouchableWithoutFeedback onPress={closeModal}>

                <View style={ss.overlay}>
                    <View style={ss.container}>
                        <Background>
                            <View style={ss.bar} />
                            {children}
                        </Background>
                    </View>
                </View>

            </TouchableWithoutFeedback>

        </Modal>
    )
}