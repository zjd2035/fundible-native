const getNavigationHeaderOptions = (route, initialRouteName) => {
  return {
    headerTitle: getHeaderTitle(route, initialRouteName),
    headerTitleStyle: {
      color: '#FFFFFF',
      fontFamily: getHeaderTitle(route, initialRouteName) === 'Fundible' ? 'lobster': 'roboto',
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
    },
  }
};

function getHeaderTitle(route, initialRouteName) {
  const routeName = route.state?.routes[route.state.index]?.name ?? initialRouteName;

  switch (routeName) {
    case 'Home':
      return 'Fundible';
    case 'Budget':
      return 'Budget';
    case 'Categories':
      return 'Categories';
    case 'Reports':
      return 'Reports';
    case 'Login':
      return 'Login';
    case 'SignUp':
      return 'Create an account';
  }
}

export { getNavigationHeaderOptions };
