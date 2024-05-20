import {createDrawerNavigator} from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import StackNavigation from './StackNavigation';
import Dashboard from '../screen/dashboard/Dashboard';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name='DrawerHome' component={Dashboard}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
