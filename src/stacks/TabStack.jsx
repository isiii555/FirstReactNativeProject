import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="Homestack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Loginstack"
        component={AuthStack}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
