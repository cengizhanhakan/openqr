import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/PreviousScansScreen';
import * as SecureStore from 'expo-secure-store';


const Stack = createStackNavigator();

const options = {
headerStyle: {
  backgroundColor: '#007fb6',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
   fontFamily:'roboto-light',
  },}

 export default function StackNavigator () {  
    return (
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home',...options}}/>
         <Stack.Screen name="Camera" component={CameraScreen} options={{title:'Camera',...options}} />
        <Stack.Screen name="PreviousScans" component={SettingsScreen} options={{title: 'Previous Scans',...options}} />
       </Stack.Navigator>
    </NavigationContainer>
    )}
