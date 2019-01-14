import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, TextInput } from 'react-native';
import firebase from '../firebase';
import TodoList from '../components/TodoList'

class Home extends React.Component {
    static navigationOptions = {
        title : 'Home',
        headerStyle: {
            backgroundColor: '#0091EA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    

    render() {
        return (
            <TodoList navigate={this.props.navigation}></TodoList>
        )
    }
}

export default Home