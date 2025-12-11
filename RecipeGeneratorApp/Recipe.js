import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Recipe({ route }) {
    const { meal } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({ 
    container: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
    },
    instructions: {
        fontSize: 18,
        lineHeight: 26,
    },
});