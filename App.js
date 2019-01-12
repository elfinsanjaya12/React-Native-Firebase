import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home'


const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  initialRootName: 'Home'
});

export default createAppContainer(RootStack);