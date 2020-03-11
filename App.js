import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import LoggedInTabNavigator from './components/LoggedInTabNavigator/LoggedInTabNavigator';
import LoggedOutNavigator from './components/LoggedOutNavigator/LoggedOutNavigator';
import { appContainer } from './constants/Styles';
import useLinking from './useLinking';

const Stack = createStackNavigator();

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});

function App({ skipLoadingScreen }) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        setLoggedIn(false);

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
          'roboto': require('./assets/fonts/Roboto-Medium.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  } else {
    return (
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            { isLoggedIn ? (
              <Stack.Navigator>
                <Stack.Screen name="LoggedInStack" component={LoggedInTabNavigator} />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator>
                <Stack.Screen name="LoggedOutStack" component={LoggedOutNavigator} />
              </Stack.Navigator>
            ) }
          </NavigationContainer>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create(appContainer);

export default App;
