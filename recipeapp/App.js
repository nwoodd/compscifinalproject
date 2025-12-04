import Foods from './foods';
import Recipe from './Recipe';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Foods'>
    <Stack.Screen name='Foods' component={Foods} />
    <Stack.Screen name='Recipe' component={Recipe} />  
    </Stack.Navigator>    
    </NavigationContainer>  
    )
}

