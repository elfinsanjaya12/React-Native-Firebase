import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import TodoPageAdd from './screens/TodoPageAdd';
import TodoPageEdit from './screens/TodoPageEdit';


const RootStack = createStackNavigator({
  Home: {
      screen: HomeScreen
  },
  TodoPageAdd :{
    screen : TodoPageAdd
  },
  TodoPageEdit :{
    screen: TodoPageEdit
  }
}, {
  initialRootName: 'TodoPageEdit'
});

export default createAppContainer(RootStack);