import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home'
import TodoPageAdd from './screens/TodoPageAdd'


const RootStack = createStackNavigator({
  Home: {
      screen: HomeScreen
  },
  TodoPageAdd :{
    screen : TodoPageAdd
  }
}, {
  initialRootName: 'Home'
});

export default createAppContainer(RootStack);