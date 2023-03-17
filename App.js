import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loggin from './screens/logginScreens';
import HomeScreen from './screens/homeScreens';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Iniciar Sesion'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
