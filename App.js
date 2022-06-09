import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Home from './screens/HomeScreen';
import Detail from './screens/DetailScreen';
import {useFonts} from 'expo-font';

const Stack = createStackNavigator();

function App() {
  const [loaded] =useFonts({
    InterBold:require("./assets/fonts/Inter-Bold.ttf"),
    InterLight:require("./assets/fonts/Inter-Light.ttf"),
    InterMedium:require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular:require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!loaded) return null;
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
   <Stack.Screen  name='Details' component={Detail}/>
   <Stack.Screen  name='Home' component={Home}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App