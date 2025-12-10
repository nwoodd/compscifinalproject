import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Recipe({ route }) {
    const { meal } = route.params;

    return (
        <View>
            <Text>{meal.strMeal}</Text>
            <Text>{meal.strInstructions}</Text>
        </View>
    )
}