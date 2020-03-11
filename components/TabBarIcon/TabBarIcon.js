import * as React from 'react';

import { Image } from 'react-native';

const icons = {
  home: {
    active: require('../assets/images/tabs/HomeIcon-active.png'),
    inactive:  require('../assets/images/tabs/HomeIcon.png'),
  },
  budget: {
    active: require('../assets/images/tabs/BudgetIcon-active.png'),
    inactive: require('../assets/images/tabs/BudgetIcon.png'),
  },
  categories: {
    active: require('../assets/images/tabs/CategoriesIcon-active.png'),
    inactive: require('../assets/images/tabs/CategoriesIcon.png'),
  },
  reports: {
    active: require('../assets/images/tabs/ReportsIcon-active.png'),
    inactive: require('../assets/images/tabs/ReportsIcon.png'),
  },
};

export default function TabBarIcon(props) {
  let sourceIcon;
  if (props.focused) {
    sourceIcon = icons[props.name].active;
  } else {
    sourceIcon = icons[props.name].inactive;
  }

  return (
    <Image
      source={sourceIcon}
      style={{
        marginBottom: -3,
        width: 28,
        height: 28,
      }}
    />
  );
}
