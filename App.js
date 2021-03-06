
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/screens/home-screen'
import ShowDetailsScreen from './src/components/screens/show-details-screen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;