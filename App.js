import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import TodoPage from './screens/TodoPage';
// import TodoPageEdit from './screens/TodoPageEdit';


const RootStack = createStackNavigator({
  Home: {
      screen: HomeScreen
  },
  TodoPage :{
    screen : TodoPage
  },
  // TodoPageEdit :{
  //   screen: TodoPageEdit
  // }
}, {
  initialRootName: 'TodoPageEdit'
});

export default createAppContainer(RootStack);