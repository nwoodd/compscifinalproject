import Foods from './Foods';
import Recipe from './Recipe';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

