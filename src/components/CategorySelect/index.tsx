import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ss } from './style'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

type Props = {
    categorySelected: string,
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean
}

export default function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
    return (
        <ScrollView horizontal style={ss.container} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }}>

            {
                categories.map((category) =>
                    <Category key={category.id} title={category.title} hasCheckBox={hasCheckBox}
                        icon={category.icon} checked={category.id === categorySelected} onPress={() => setCategory(category.id)} />
                )
            }

        </ScrollView >
    )
}