import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import RegisterCompany from '../screen/company/RegisterCompany';
import Dashboard from '../screen/dashboard/Dashboard';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
