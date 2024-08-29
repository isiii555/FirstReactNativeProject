import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="Homepage"
        component={HomeStack}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Login"
        component={AuthStack}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
