import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from './src/screen/SplashScreen';
import RegisterCompany from './src/screen/company/RegisterCompany';
import Dashboard from './src/screen/dashboard/Dashboard';
import Home from './src/screen/Home';
import Login from './src/screen/auth/Login';
import Register from './src/screen/auth/Register';
import DetailProduct from './src/screen/dashboard/DetailProduct';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerPosition: 'right',
//         headerShown: false,
//         drawerStyle: {
//           backgroundColor: '#c6cbef',
//           borderBottomLeftRadius: 10,
//           borderTopLeftRadius: 10,
//         },
//       }}>
//       <Drawer.Screen name="DrawerUser" component={Home} />
//       <Drawer.Screen name="DrawerSetting" component={Home} />
//     </Drawer.Navigator>
//   );
// };

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="DetailProduct" component={DetailProduct} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator> */}
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#c6cbef',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          },
        }}>
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Drawer.Screen name="DrawerUser" component={Home} />
        <Drawer.Screen name="DrawerSetting" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
