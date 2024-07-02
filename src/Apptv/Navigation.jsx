import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Home';
// import Main from './Main';
// import Practise from './Practise';
import AddContact from '../contactAPP/AddContact';
import Home from "../contactAPP/AddContact";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    // <Stack.Navigator initialRouteName='Home'>
    // <Stack.Navigator initialRouteName='Practise'>
    //     <Stack.Screen component={Home} name = "Home" options={{ headerShown: false }}></Stack.Screen> 
    //     <Stack.Screen component={Main} name = "Main" options={{ headerShown: false }}></Stack.Screen> 
    //     <Stack.Screen component={Practise} name = "Practise" options = {{headerShown: false}}></Stack.Screen>
    // </Stack.Navigator>

  <Stack.Navigator initialRouteName='Home-Screen'>
    <Stack.Screen name = "Home-screen" component={Home}></Stack.Screen>
    <Stack.Screen name = "Add-contact-screen"  component= {AddContact}></Stack.Screen>
  </Stack.Navigator>
  )
}

export default Navigation;
