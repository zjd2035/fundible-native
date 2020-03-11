import React from 'react';
import { getNavigationHeaderOptions } from '../../utils/headerUtils';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

function LoggedOutNavigator({ navigation, route }) {
  navigation.setOptions(getNavigationHeaderOptions(route, INITIAL_ROUTE_NAME));

  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          transitionConfig: () => ({
            transitionSpec: {
              duration: 0,
            },
          })
        }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
          transitionConfig: () => ({
            transitionSpec: {
              duration: 0,
            },
          })
        }}
      />
    </Stack.Navigator>
  );
}

export default LoggedOutNavigator;