import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack';

const Navigation = () => {
  const linking = {
    prefixes : ['myfirstproject://'],
    config : {
      screens : {
        Homestack : {
          path : 'home/',
          screens : {
            Homepage : {
              path : '/'
            },
            Detailspage : {
              path : 'details/:id'
            }
          }
        },
        Loginstack : {
          path : 'login/',
          screens : {
            Login : {
              path : '/'
            },
            Register : {
              path : 'register/'
            },
          }
        },
      }
    },
  };
  
  return (
    <NavigationContainer linking={linking}>
      <TabStack/>
    </NavigationContainer>
  );
};

export default Navigation;
