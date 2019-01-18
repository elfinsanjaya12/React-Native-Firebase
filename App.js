import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import TodoPage from './screens/TodoPage';
import EditTodo from './screens/EditTodo';


const RootStack = createStackNavigator({
  Home: {
      screen: HomeScreen
  },
  TodoPage :{
    screen : TodoPage
  },
  EditTodo :{
    screen: EditTodo
  }
}, {
  initialRootName: 'Home'
});

export default createAppContainer(RootStack);