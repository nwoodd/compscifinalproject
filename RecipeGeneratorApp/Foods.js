import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';


const [foods, setfoods] = useState 

const moreFood() => {
    fetch('www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
      .then((json) => {  
        console.log(json); 
        const newFoods = json.foods;
        setMovies((prev) => [...prev, ...newFoods]);   
      })
      .catch((error) => {
        console.error(error);
      });
}