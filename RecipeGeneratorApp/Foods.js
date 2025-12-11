import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Pressable } from 'react-native';


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
      <Text style={styles.titleText}>Generate a recipe!</Text>
      <Pressable style={styles.button} onPress={moreFood}>
      <Text style={styles.buttonText}>What should I make today?</Text>
      </Pressable>

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f961ccff',  // change color here
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,  // makes text bigger
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  }

});