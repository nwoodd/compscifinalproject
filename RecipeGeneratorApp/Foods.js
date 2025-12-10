import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default function Foods({ navigation }) {
  const [foods, setFoods] = useState ([])

  const moreFood = () => {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
        .then((json) => {  
          console.log(json); 
          const newFoods = json.meals;
          setFoods((prev) => [...prev, ...newFoods]);   
        })
        .catch((error) => {
          console.error(error);
        });
  }
  return (
    <View>
      <Text>Generate a recipe!</Text>
      <Button title = "Give me dinner ideas" onPress = {moreFood}/>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.idMeal}
        renderItem={({item}) => (
          <Text
            onPress={() => navigation.navigate('Recipe', { meal: item })}
          >
            {item.strMeal}
          </Text>
        )}
      />

    </View>
  )
  
}