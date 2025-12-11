import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Recipe({ route }) {
    const { meal } = route.params;

    return (
        <ScrollView>
            <Text>{meal.strMeal}</Text>
            <Text>{meal.strInstructions}</Text>
        </ScrollView>
    )
}