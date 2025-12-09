import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function Foods() {
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
      <FlatList>
        data={foods}
        keyExtractor={(item) => item.idMeal}
        renderItem={({item}) => (
          <Text>
            {item.strMeal}
          </Text>
        )}
      </FlatList>

    </View>
  )
  
}