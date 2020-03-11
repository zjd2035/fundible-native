import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../TabBarIcon/TabBarIcon';
import Home from '../../screens/Home';
import { getNavigationHeaderOptions } from '../../utils/headerUtils';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function LoggedInTabNavigator({ navigation, route }) {
  navigation.setOptions(getNavigationHeaderOptions(route, INITIAL_ROUTE_NAME));

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#01FA57',
        activeBackgroundColor: '#162531',
        inactiveTintColor: '#FFFFFF',
        inactiveBackgroundColor: '#162531',
        style: {
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Budget"
        component={Home}
        options={{
          title: 'Budget',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="budget" />,
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={Home}
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="categories" />,
        }}
      />
      <BottomTab.Screen
        name="Reports"
        component={Home}
        options={{
          title: 'Reports',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="reports" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default LoggedInTabNavigator;
