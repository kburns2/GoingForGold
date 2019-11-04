import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,Button, Alert, Image} from "react-native";
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator,} from 'react-navigation-tabs';

/* Import Other Pages */
import Home_Activity from './screens/Home_Activity.js'
import Settings_Activity from './screens/Settings_Activity.js'
import Details_Activity from './screens/Details_Activity.js'
import Profile_Activity from './screens/Profile_Activity.js'


const HomeTab = createStackNavigator(
  {
    Home: {
      screen: Home_Activity,
      navigationOptions:{
        header:null,
      }
    },
    Details: {
      screen: Details_Activity,
      navigationOptions:{
        header:null,
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);
 
const SettingsTab = createStackNavigator(
  {
    Settings: {
      screen: Settings_Activity,
      navigationOptions:{
        header:null,
      }
    },
    Details:{
      screen: Details_Activity,
      navigationOptions: {
        header:null,
      }
    },
    Profile: {
      screen: Profile_Activity,
      navigationOptions: {
        header:null,
      }
     
    } ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }

);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Analysis: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') { //Navigation to Home_Activity
          return (
            <Image
              source={ require('./assets/home.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else {
          return (
            <Image
              source={ require('./assets/analysis.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(160,161,81)',
      inactiveTintColor: '#263238',
    },
  }
);
 
 
export default createAppContainer(MainApp);
