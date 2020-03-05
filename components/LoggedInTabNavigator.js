import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from './TabBarIcon';
import Home from '../pages/Home';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function LoggedInTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {
      color: '#FFFFFF',
      fontFamily: getHeaderTitle(route) === 'Fundible' ? 'lobster': 'roboto',
      alignSelf: 'center',
    },
    headerStyle: {
      backgroundColor: '#162531',
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
    }
  });

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

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Fundible';
    case 'Budget':
      return 'Budget';
    case 'Categories':
      return 'Categories';
    case 'Reports':
      return 'Reports';
  }
}

export default LoggedInTabNavigator;
