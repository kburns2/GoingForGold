import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import First from '../screens/First';
import Second from '../screens/Second';

export const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  First: {
    screen: First,
  },
  Second: {
    screen: Second,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});